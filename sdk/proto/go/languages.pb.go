// Code generated by protoc-gen-go.
// source: languages.proto
// DO NOT EDIT!

package lumirpc

import proto "github.com/golang/protobuf/proto"
import fmt "fmt"
import math "math"
import google_protobuf "github.com/golang/protobuf/ptypes/struct"

import (
	context "golang.org/x/net/context"
	grpc "google.golang.org/grpc"
)

// Reference imports to suppress errors if they are not otherwise used.
var _ = proto.Marshal
var _ = fmt.Errorf
var _ = math.Inf

// RunRequest asks the interpreter to execute a program.
type RunRequest struct {
	Pwd     string            `protobuf:"bytes,1,opt,name=pwd" json:"pwd,omitempty"`
	Program string            `protobuf:"bytes,2,opt,name=program" json:"program,omitempty"`
	Args    []string          `protobuf:"bytes,3,rep,name=args" json:"args,omitempty"`
	Config  map[string]string `protobuf:"bytes,4,rep,name=config" json:"config,omitempty" protobuf_key:"bytes,1,opt,name=key" protobuf_val:"bytes,2,opt,name=value"`
}

func (m *RunRequest) Reset()                    { *m = RunRequest{} }
func (m *RunRequest) String() string            { return proto.CompactTextString(m) }
func (*RunRequest) ProtoMessage()               {}
func (*RunRequest) Descriptor() ([]byte, []int) { return fileDescriptor2, []int{0} }

func (m *RunRequest) GetPwd() string {
	if m != nil {
		return m.Pwd
	}
	return ""
}

func (m *RunRequest) GetProgram() string {
	if m != nil {
		return m.Program
	}
	return ""
}

func (m *RunRequest) GetArgs() []string {
	if m != nil {
		return m.Args
	}
	return nil
}

func (m *RunRequest) GetConfig() map[string]string {
	if m != nil {
		return m.Config
	}
	return nil
}

// RunResponse is the response back from the interpreter/source back to the monitor.
type RunResponse struct {
	Error string `protobuf:"bytes,1,opt,name=error" json:"error,omitempty"`
}

func (m *RunResponse) Reset()                    { *m = RunResponse{} }
func (m *RunResponse) String() string            { return proto.CompactTextString(m) }
func (*RunResponse) ProtoMessage()               {}
func (*RunResponse) Descriptor() ([]byte, []int) { return fileDescriptor2, []int{1} }

func (m *RunResponse) GetError() string {
	if m != nil {
		return m.Error
	}
	return ""
}

// NewResourceRequest contains information about a resource object that was newly allocated.
type NewResourceRequest struct {
	Type   string                  `protobuf:"bytes,1,opt,name=type" json:"type,omitempty"`
	Name   string                  `protobuf:"bytes,2,opt,name=name" json:"name,omitempty"`
	Object *google_protobuf.Struct `protobuf:"bytes,3,opt,name=object" json:"object,omitempty"`
}

func (m *NewResourceRequest) Reset()                    { *m = NewResourceRequest{} }
func (m *NewResourceRequest) String() string            { return proto.CompactTextString(m) }
func (*NewResourceRequest) ProtoMessage()               {}
func (*NewResourceRequest) Descriptor() ([]byte, []int) { return fileDescriptor2, []int{2} }

func (m *NewResourceRequest) GetType() string {
	if m != nil {
		return m.Type
	}
	return ""
}

func (m *NewResourceRequest) GetName() string {
	if m != nil {
		return m.Name
	}
	return ""
}

func (m *NewResourceRequest) GetObject() *google_protobuf.Struct {
	if m != nil {
		return m.Object
	}
	return nil
}

// NewResourceResponse reflects back the properties initialized during creation, if applicable.
type NewResourceResponse struct {
	Id     string                  `protobuf:"bytes,1,opt,name=id" json:"id,omitempty"`
	Urn    string                  `protobuf:"bytes,2,opt,name=urn" json:"urn,omitempty"`
	Object *google_protobuf.Struct `protobuf:"bytes,3,opt,name=object" json:"object,omitempty"`
}

func (m *NewResourceResponse) Reset()                    { *m = NewResourceResponse{} }
func (m *NewResourceResponse) String() string            { return proto.CompactTextString(m) }
func (*NewResourceResponse) ProtoMessage()               {}
func (*NewResourceResponse) Descriptor() ([]byte, []int) { return fileDescriptor2, []int{3} }

func (m *NewResourceResponse) GetId() string {
	if m != nil {
		return m.Id
	}
	return ""
}

func (m *NewResourceResponse) GetUrn() string {
	if m != nil {
		return m.Urn
	}
	return ""
}

func (m *NewResourceResponse) GetObject() *google_protobuf.Struct {
	if m != nil {
		return m.Object
	}
	return nil
}

func init() {
	proto.RegisterType((*RunRequest)(nil), "lumirpc.RunRequest")
	proto.RegisterType((*RunResponse)(nil), "lumirpc.RunResponse")
	proto.RegisterType((*NewResourceRequest)(nil), "lumirpc.NewResourceRequest")
	proto.RegisterType((*NewResourceResponse)(nil), "lumirpc.NewResourceResponse")
}

// Reference imports to suppress errors if they are not otherwise used.
var _ context.Context
var _ grpc.ClientConn

// This is a compile-time assertion to ensure that this generated file
// is compatible with the grpc package it is being compiled against.
const _ = grpc.SupportPackageIsVersion4

// Client API for LanguageRuntime service

type LanguageRuntimeClient interface {
	Run(ctx context.Context, in *RunRequest, opts ...grpc.CallOption) (*RunResponse, error)
}

type languageRuntimeClient struct {
	cc *grpc.ClientConn
}

func NewLanguageRuntimeClient(cc *grpc.ClientConn) LanguageRuntimeClient {
	return &languageRuntimeClient{cc}
}

func (c *languageRuntimeClient) Run(ctx context.Context, in *RunRequest, opts ...grpc.CallOption) (*RunResponse, error) {
	out := new(RunResponse)
	err := grpc.Invoke(ctx, "/lumirpc.LanguageRuntime/Run", in, out, c.cc, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

// Server API for LanguageRuntime service

type LanguageRuntimeServer interface {
	Run(context.Context, *RunRequest) (*RunResponse, error)
}

func RegisterLanguageRuntimeServer(s *grpc.Server, srv LanguageRuntimeServer) {
	s.RegisterService(&_LanguageRuntime_serviceDesc, srv)
}

func _LanguageRuntime_Run_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(RunRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(LanguageRuntimeServer).Run(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/lumirpc.LanguageRuntime/Run",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(LanguageRuntimeServer).Run(ctx, req.(*RunRequest))
	}
	return interceptor(ctx, in, info, handler)
}

var _LanguageRuntime_serviceDesc = grpc.ServiceDesc{
	ServiceName: "lumirpc.LanguageRuntime",
	HandlerType: (*LanguageRuntimeServer)(nil),
	Methods: []grpc.MethodDesc{
		{
			MethodName: "Run",
			Handler:    _LanguageRuntime_Run_Handler,
		},
	},
	Streams:  []grpc.StreamDesc{},
	Metadata: "languages.proto",
}

// Client API for ResourceMonitor service

type ResourceMonitorClient interface {
	NewResource(ctx context.Context, in *NewResourceRequest, opts ...grpc.CallOption) (*NewResourceResponse, error)
}

type resourceMonitorClient struct {
	cc *grpc.ClientConn
}

func NewResourceMonitorClient(cc *grpc.ClientConn) ResourceMonitorClient {
	return &resourceMonitorClient{cc}
}

func (c *resourceMonitorClient) NewResource(ctx context.Context, in *NewResourceRequest, opts ...grpc.CallOption) (*NewResourceResponse, error) {
	out := new(NewResourceResponse)
	err := grpc.Invoke(ctx, "/lumirpc.ResourceMonitor/NewResource", in, out, c.cc, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

// Server API for ResourceMonitor service

type ResourceMonitorServer interface {
	NewResource(context.Context, *NewResourceRequest) (*NewResourceResponse, error)
}

func RegisterResourceMonitorServer(s *grpc.Server, srv ResourceMonitorServer) {
	s.RegisterService(&_ResourceMonitor_serviceDesc, srv)
}

func _ResourceMonitor_NewResource_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(NewResourceRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(ResourceMonitorServer).NewResource(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/lumirpc.ResourceMonitor/NewResource",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(ResourceMonitorServer).NewResource(ctx, req.(*NewResourceRequest))
	}
	return interceptor(ctx, in, info, handler)
}

var _ResourceMonitor_serviceDesc = grpc.ServiceDesc{
	ServiceName: "lumirpc.ResourceMonitor",
	HandlerType: (*ResourceMonitorServer)(nil),
	Methods: []grpc.MethodDesc{
		{
			MethodName: "NewResource",
			Handler:    _ResourceMonitor_NewResource_Handler,
		},
	},
	Streams:  []grpc.StreamDesc{},
	Metadata: "languages.proto",
}

func init() { proto.RegisterFile("languages.proto", fileDescriptor2) }

var fileDescriptor2 = []byte{
	// 368 bytes of a gzipped FileDescriptorProto
	0x1f, 0x8b, 0x08, 0x00, 0x00, 0x09, 0x6e, 0x88, 0x02, 0xff, 0x94, 0x51, 0x4d, 0x4f, 0xab, 0x40,
	0x14, 0x7d, 0x40, 0x5f, 0x9b, 0x5e, 0x92, 0xd7, 0x97, 0x69, 0x13, 0x09, 0x36, 0x91, 0xe0, 0x86,
	0x15, 0x4d, 0x70, 0xe1, 0xc7, 0xd6, 0x74, 0x63, 0xd4, 0xc5, 0xb8, 0x76, 0x41, 0xe9, 0x14, 0xb1,
	0x30, 0x83, 0xc3, 0x8c, 0x0d, 0xff, 0xce, 0x9f, 0x66, 0x18, 0x66, 0xb4, 0x8d, 0xdd, 0xb8, 0x3b,
	0xf7, 0x70, 0xe6, 0x9e, 0x73, 0x0f, 0x30, 0x29, 0x53, 0x9a, 0xcb, 0x34, 0x27, 0x4d, 0x5c, 0x73,
	0x26, 0x18, 0x1a, 0x95, 0xb2, 0x2a, 0x78, 0x9d, 0xf9, 0xf3, 0x9c, 0xb1, 0xbc, 0x24, 0x0b, 0x45,
	0xaf, 0xe4, 0x66, 0xd1, 0x08, 0x2e, 0x33, 0xd1, 0xcb, 0xc2, 0x0f, 0x0b, 0x00, 0x4b, 0x8a, 0xc9,
	0x9b, 0x24, 0x8d, 0x40, 0xff, 0xc1, 0xa9, 0x77, 0x6b, 0xcf, 0x0a, 0xac, 0x68, 0x8c, 0x3b, 0x88,
	0x3c, 0x18, 0xd5, 0x9c, 0xe5, 0x3c, 0xad, 0x3c, 0x5b, 0xb1, 0x66, 0x44, 0x08, 0x06, 0x29, 0xcf,
	0x1b, 0xcf, 0x09, 0x9c, 0x68, 0x8c, 0x15, 0x46, 0x97, 0x30, 0xcc, 0x18, 0xdd, 0x14, 0xb9, 0x37,
	0x08, 0x9c, 0xc8, 0x4d, 0xce, 0x62, 0x1d, 0x23, 0xfe, 0x36, 0x89, 0x6f, 0x95, 0x62, 0x49, 0x05,
	0x6f, 0xb1, 0x96, 0xfb, 0xd7, 0xe0, 0xee, 0xd1, 0x5d, 0x8e, 0x2d, 0x69, 0x4d, 0x8e, 0x2d, 0x69,
	0xd1, 0x0c, 0xfe, 0xbe, 0xa7, 0xa5, 0x24, 0x3a, 0x45, 0x3f, 0xdc, 0xd8, 0x57, 0x56, 0x78, 0x0e,
	0xae, 0x5a, 0xde, 0xd4, 0x8c, 0x36, 0xa4, 0x13, 0x12, 0xce, 0x19, 0xd7, 0x8f, 0xfb, 0x21, 0xac,
	0x00, 0x3d, 0x92, 0x1d, 0x26, 0x0d, 0x93, 0x3c, 0x23, 0xe6, 0x5c, 0x04, 0x03, 0xd1, 0xd6, 0x44,
	0x4b, 0x15, 0xee, 0x38, 0x9a, 0x56, 0xc6, 0x47, 0x61, 0xb4, 0x80, 0x21, 0x5b, 0xbd, 0x92, 0x4c,
	0x78, 0x4e, 0x60, 0x45, 0x6e, 0x72, 0x12, 0xf7, 0xa5, 0xc6, 0xa6, 0xd4, 0xf8, 0x49, 0x95, 0x8a,
	0xb5, 0x2c, 0x7c, 0x81, 0xe9, 0x81, 0x9d, 0xce, 0xf6, 0x0f, 0xec, 0xc2, 0xb4, 0x6b, 0x17, 0xeb,
	0xee, 0x4c, 0xc9, 0xa9, 0xb6, 0xea, 0xe0, 0xaf, 0x9d, 0x92, 0x25, 0x4c, 0xee, 0xf5, 0xaf, 0xc7,
	0x92, 0x8a, 0xa2, 0x22, 0x28, 0x01, 0x07, 0x4b, 0x8a, 0xa6, 0x47, 0xba, 0xf7, 0x67, 0x87, 0x64,
	0x9f, 0x2b, 0xfc, 0x93, 0x3c, 0xc3, 0xc4, 0xa4, 0x7d, 0x60, 0xb4, 0x10, 0x8c, 0xa3, 0x3b, 0x70,
	0xf7, 0x6e, 0x40, 0xa7, 0x5f, 0x2f, 0x7f, 0x16, 0xe9, 0xcf, 0x8f, 0x7f, 0x34, 0xeb, 0x57, 0x43,
	0x15, 0xff, 0xe2, 0x33, 0x00, 0x00, 0xff, 0xff, 0xa3, 0x7b, 0x8b, 0x36, 0xa7, 0x02, 0x00, 0x00,
}
