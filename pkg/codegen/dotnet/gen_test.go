package dotnet

import (
	"testing"

	"github.com/pulumi/pulumi/pkg/v3/codegen/internal/test"
	"github.com/pulumi/pulumi/pkg/v3/codegen/schema"

	"github.com/stretchr/testify/assert"
)

func TestGeneratePackage(t *testing.T) {
	test.TestSDKCodegen(t, "dotnet", GeneratePackage)
}

func TestGenerateType(t *testing.T) {
	cases := []struct {
		typ      schema.Type
		expected string
	}{
		{
			&schema.InputType{
				ElementType: &schema.ArrayType{
					ElementType: &schema.InputType{
						ElementType: &schema.ArrayType{
							ElementType: &schema.InputType{
								ElementType: schema.NumberType,
							},
						},
					},
				},
			},
			"InputList<ImmutableArray<double>>",
		},
		{
			&schema.InputType{
				ElementType: &schema.MapType{
					ElementType: &schema.InputType{
						ElementType: &schema.ArrayType{
							ElementType: &schema.InputType{
								ElementType: schema.NumberType,
							},
						},
					},
				},
			},
			"InputMap<ImmutableArray<double>>",
		},
	}

	mod := &modContext{mod: "main"}
	for _, c := range cases {
		t.Run(c.typ.String(), func(t *testing.T) {
			typeString := mod.typeString(c.typ, "", true, false, false)
			assert.Equal(t, c.expected, typeString)
		})
	}
}
