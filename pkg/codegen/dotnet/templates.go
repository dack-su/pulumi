// Copyright 2016-2023, Pulumi Corporation.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

//nolint:lll
package dotnet

import (
	"strings"
	"text/template"

	"github.com/pulumi/pulumi/pkg/v3/codegen/schema"
)

//nolint:lll
const csharpUtilitiesTemplateText = `// *** WARNING: this file was generated by {{.Tool}}. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

namespace {{.Namespace}}
{
    static class {{.ClassName}}
    {
        public static string? GetEnv(params string[] names)
        {
            foreach (var n in names)
            {
                var value = global::System.Environment.GetEnvironmentVariable(n);
                if (value != null)
                {
                    return value;
                }
            }
            return null;
        }

        static string[] trueValues = { "1", "t", "T", "true", "TRUE", "True" };
        static string[] falseValues = { "0", "f", "F", "false", "FALSE", "False" };
        public static bool? GetEnvBoolean(params string[] names)
        {
            var s = GetEnv(names);
            if (s != null)
            {
                if (global::System.Array.IndexOf(trueValues, s) != -1)
                {
                    return true;
                }
                if (global::System.Array.IndexOf(falseValues, s) != -1)
                {
                    return false;
                }
            }
            return null;
        }

        public static int? GetEnvInt32(params string[] names) => int.TryParse(GetEnv(names), out int v) ? (int?)v : null;

        public static double? GetEnvDouble(params string[] names) => double.TryParse(GetEnv(names), out double v) ? (double?)v : null;

        [global::System.Obsolete("Please use WithDefaults instead")]
        public static global::Pulumi.InvokeOptions WithVersion(this global::Pulumi.InvokeOptions? options)
        {
            var dst = options ?? new global::Pulumi.InvokeOptions{};
            dst.Version = options?.Version ?? Version;
            return dst;
        }

        public static global::Pulumi.InvokeOptions WithDefaults(this global::Pulumi.InvokeOptions? src)
        {
            var dst = src ?? new global::Pulumi.InvokeOptions{};
            dst.Version = src?.Version ?? Version;{{if ne .PluginDownloadURL "" }}
            dst.PluginDownloadURL = src?.PluginDownloadURL ?? "{{.PluginDownloadURL}}";{{end}}
            return dst;
        }

        private readonly static string version;
        public static string Version => version;

        static {{.ClassName}}()
        {
            var assembly = global::System.Reflection.IntrospectionExtensions.GetTypeInfo(typeof({{.ClassName}})).Assembly;
            using var stream = assembly.GetManifestResourceStream("{{.Namespace}}.version.txt");
            using var reader = new global::System.IO.StreamReader(stream ?? throw new global::System.NotSupportedException("Missing embedded version.txt file"));
            version = reader.ReadToEnd().Trim();
            var parts = version.Split("\n");
            if (parts.Length == 2)
            {
                // The first part is the provider name.
                version = parts[1].Trim();
            }
        }
    }

    internal sealed class {{.Name}}ResourceTypeAttribute : global::Pulumi.ResourceTypeAttribute
    {
        public {{.Name}}ResourceTypeAttribute(string type) : base(type, {{.ClassName}}.Version)
        {
        }
    }
}
`

var csharpUtilitiesTemplate = template.Must(template.New("CSharpUtilities").Parse(csharpUtilitiesTemplateText))

type csharpUtilitiesTemplateContext struct {
	Name              string
	Namespace         string
	ClassName         string
	Tool              string
	PluginDownloadURL string
}

// TODO(pdg): parameterize package name
const csharpProjectFileTemplateText = `<Project Sdk="Microsoft.NET.Sdk">

  <PropertyGroup>
    <GeneratePackageOnBuild>true</GeneratePackageOnBuild>
    <Authors>{{or .Package.Publisher "Pulumi Corp."}}</Authors>
    <Company>{{or .Package.Publisher "Pulumi Corp."}}</Company>
    <Description>{{.Package.Description}}</Description>
    <PackageLicenseExpression>{{.Package.License}}</PackageLicenseExpression>
    <PackageProjectUrl>{{.Package.Homepage}}</PackageProjectUrl>
    <RepositoryUrl>{{.Package.Repository}}</RepositoryUrl>
    <PackageIcon>logo.png</PackageIcon>
    {{- if .Version }}
    <Version>{{.Version}}</Version>
    {{- end }}

    <TargetFramework>net6.0</TargetFramework>
    <Nullable>enable</Nullable>
    <UseSharedCompilation>false</UseSharedCompilation>
  </PropertyGroup>

  <PropertyGroup Condition="'$(Configuration)|$(Platform)'=='Debug|AnyCPU'">
    <GenerateDocumentationFile>true</GenerateDocumentationFile>
    <NoWarn>1701;1702;1591</NoWarn>
  </PropertyGroup>

  <PropertyGroup>
    <AllowedOutputExtensionsInPackageBuildOutputFolder>$(AllowedOutputExtensionsInPackageBuildOutputFolder);.pdb</AllowedOutputExtensionsInPackageBuildOutputFolder>
    <EmbedUntrackedSources>true</EmbedUntrackedSources>
    <PublishRepositoryUrl>true</PublishRepositoryUrl>
  </PropertyGroup>

  <PropertyGroup Condition="'$(GITHUB_ACTIONS)' == 'true'">
    <ContinuousIntegrationBuild>true</ContinuousIntegrationBuild>
  </PropertyGroup>

  <ItemGroup>
    <PackageReference Include="Microsoft.SourceLink.GitHub" Version="1.0.0" PrivateAssets="All" />
  </ItemGroup>

  <ItemGroup>
    <EmbeddedResource Include="version.txt" />
    <None Include="version.txt" Pack="True" PackagePath="content" />
  </ItemGroup>

  <ItemGroup>
    <EmbeddedResource Include="pulumi-plugin.json" />
    <None Include="pulumi-plugin.json" Pack="True" PackagePath="content" />
  </ItemGroup>

  <ItemGroup>
    {{- range $package, $version := .PackageReferences}}
    <PackageReference Include="{{$package}}" Version="{{$version}}"{{if ispulumipkg $package}} ExcludeAssets="contentFiles"{{end}} />
    {{- end}}
  </ItemGroup>

  <ItemGroup>
    {{- range $projdir := .ProjectReferences}}
    <ProjectReference Include="{{$projdir}}"  />
    {{- end}}
  </ItemGroup>

  <ItemGroup>
    <None Include="logo.png">
      <Pack>True</Pack>
      <PackagePath></PackagePath>
    </None>
  </ItemGroup>

</Project>
`

var csharpProjectFileTemplate = template.Must(template.New("CSharpProject").Funcs(template.FuncMap{
	// ispulumipkg is used in the template to conditionally emit `ExcludeAssets="contentFiles"`
	// for `<PackageReference>`s that start with "Pulumi.", to prevent the references's contentFiles
	// from being included in this project's package. Otherwise, if a reference has version.txt
	// in its contentFiles, and we don't exclude contentFiles for the reference, the reference's
	// version.txt will be used over this project's version.txt.
	"ispulumipkg": func(s string) bool {
		return strings.HasPrefix(s, "Pulumi.")
	},
}).Parse(csharpProjectFileTemplateText))

type csharpProjectFileTemplateContext struct {
	XMLDoc            string
	Package           *schema.Package
	PackageReferences map[string]string
	ProjectReferences []string
	Version           string
}
