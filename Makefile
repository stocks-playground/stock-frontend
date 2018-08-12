
protos:
	@grpc_tools_node_protoc  --proto_path=protobuf/proto-schema\
		--js_out=import_style=commonjs,binary:src/generated/ \
		--grpc_out=src/generated/ \
		--plugin=protoc-gen-grpc=`which grpc_tools_node_protoc_plugin` \
		protobuf/proto-schema/stock/*.proto