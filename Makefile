
protos:
	@protoc --proto_path=protobuf/proto-schema \
			-I${GOPATH}/src/github.com/grpc-ecosystem/grpc-gateway/third_party/googleapis \
			--plugin=protoc-gen-ts=./node_modules/.bin/protoc-gen-ts \
			--js_out=import_style=commonjs,binary:protobuf \
			--ts_out=service=true:protobuf \
			protobuf/proto-schema/stock/*.proto