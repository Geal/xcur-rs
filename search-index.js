var searchIndex = {};
searchIndex["xcur"] = {"doc":"# Usage\nPut this in your `Cargo.toml`:","items":[[0,"parser","xcur","# Basic usage\nTo parse a `XCursor` file you will need to use the `File::parse` function,\nyou need to pass to it an `u8` inmutable slice and voila! that&#39;s all.",null,null],[3,"Header","xcur::parser","Represents the `XCur` file `Header`",null,null],[12,"magic","","Magic bytes",0,null],[12,"header","","Bytes in header",0,null],[12,"version","","File version",0,null],[12,"ntoc","","Number of TOCs",0,null],[3,"TableOfContents","","Information of chunks",null,null],[12,"type_","","Entry type.",1,null],[12,"subtype","","Type-specific label, size for images.",1,null],[12,"position","","Absolute position of table in file",1,null],[3,"ChunkHeader","","The base header for all chunks",null,null],[12,"header","","Bytes used in the chunk",2,null],[12,"type_","","The chunk type",2,null],[12,"subtype","","The subtype",2,null],[12,"version","","The chunk version",2,null],[3,"Comment","","Represents a comment in `XCursor` file",null,null],[12,"chunkheader","","The chunk header",3,null],[12,"length","","The comment string length",3,null],[12,"string","","The comment string",3,null],[3,"Image","","An image",null,null],[12,"chunkheader","","The chunk header",4,null],[12,"width","","Image width",4,null],[12,"height","","Image height",4,null],[12,"xhot","","X Hot",4,null],[12,"yhot","","Y Hot",4,null],[12,"delay","","Delay in ms",4,null],[12,"pixels","","The actual image data",4,null],[3,"File","","The `XCursor` file",null,null],[12,"comments","","The comments in file",5,null],[12,"images","","The images in file",5,null],[4,"ParseError","","Represents an error when parsing an `XCursor` file",null,null],[13,"NomError","","A `nom` error",6,null],[13,"InvalidHeader","","Invalid header",6,null],[13,"InvalidCommentVersion","","Invalid comment version in file",6,null],[13,"InvalidImageVersion","","Invalid image version in file",6,null],[13,"InvalidImageWidth","","Invalid image width",6,null],[13,"InvalidImageHeight","","Invalid image height",6,null],[13,"InvalidImageXHot","","Invalid image X hot",6,null],[13,"InvalidImageYHot","","Invalid image X hot",6,null],[13,"InvalidTOC","","Invalid `TableOfContents` type",6,null],[6,"CARD32","","32-bit unsigned integer",null,null],[6,"CARD8","","8-bit unsigned integer",null,null],[17,"COMMENT_COPYRIGHT","","Comment subtype",null,null],[17,"COMMENT_LICENSE","","Comment subtype",null,null],[17,"COMMENT_OTHER","","Comment subtype",null,null],[11,"clone","","",0,null],[11,"fmt","","",0,null],[11,"clone","","",1,null],[11,"fmt","","",1,null],[11,"clone","","",2,null],[11,"fmt","","",2,null],[11,"clone","","",3,null],[11,"fmt","","",3,null],[11,"clone","","",4,null],[11,"fmt","","",4,null],[11,"clone","","",5,null],[11,"fmt","","",5,null],[11,"parse","","Parses an XCursor file",5,null],[11,"fmt","","",6,null],[11,"from","","",6,{"inputs":[{"name":"err"}],"output":{"name":"parseerror"}}],[11,"fmt","","",6,null],[11,"description","","",6,null]],"paths":[[3,"Header"],[3,"TableOfContents"],[3,"ChunkHeader"],[3,"Comment"],[3,"Image"],[3,"File"],[4,"ParseError"]]};
searchIndex["nom"] = {"doc":"nom, eating data byte by byte","items":[[3,"ProducerRepeat","nom","ProducerRepeat takes a single value, and generates it at each step",null,null],[3,"MemProducer","","A MemProducer generates values from an in memory byte buffer",null,null],[3,"FileProducer","","",null,null],[3,"MapConsumer","","MapConsumer takes a function S -&gt; T and applies it on a consumer producing values of type S",null,null],[3,"ChainConsumer","","ChainConsumer takes a consumer C1 R -&gt; S, and a consumer C2 S -&gt; T, and makes a consumer R -&gt; T by applying C2 on C1&#39;s result",null,null],[4,"ErrorKind","","indicates which parser returned an error",null,null],[13,"Custom","","",0,null],[13,"Tag","","",0,null],[13,"MapRes","","",0,null],[13,"MapOpt","","",0,null],[13,"Alt","","",0,null],[13,"IsNot","","",0,null],[13,"IsA","","",0,null],[13,"SeparatedList","","",0,null],[13,"SeparatedNonEmptyList","","",0,null],[13,"Many0","","",0,null],[13,"Many1","","",0,null],[13,"Count","","",0,null],[13,"TakeUntilAndConsume","","",0,null],[13,"TakeUntil","","",0,null],[13,"TakeUntilEitherAndConsume","","",0,null],[13,"TakeUntilEither","","",0,null],[13,"LengthValue","","",0,null],[13,"TagClosure","","",0,null],[13,"Alpha","","",0,null],[13,"Digit","","",0,null],[13,"HexDigit","","",0,null],[13,"OctDigit","","",0,null],[13,"AlphaNumeric","","",0,null],[13,"Space","","",0,null],[13,"MultiSpace","","",0,null],[13,"LengthValueFn","","",0,null],[13,"Eof","","",0,null],[13,"ExprOpt","","",0,null],[13,"ExprRes","","",0,null],[13,"CondReduce","","",0,null],[13,"Switch","","",0,null],[13,"TagBits","","",0,null],[13,"OneOf","","",0,null],[13,"NoneOf","","",0,null],[13,"Char","","",0,null],[13,"CrLf","","",0,null],[13,"RegexpMatch","","",0,null],[13,"RegexpMatches","","",0,null],[13,"RegexpFind","","",0,null],[13,"RegexpCapture","","",0,null],[13,"RegexpCaptures","","",0,null],[13,"TakeWhile1","","",0,null],[13,"Complete","","",0,null],[13,"Fix","","",0,null],[13,"Escaped","","",0,null],[13,"EscapedTransform","","",0,null],[13,"TagStr","","",0,null],[13,"IsNotStr","","",0,null],[13,"IsAStr","","",0,null],[13,"TakeWhile1Str","","",0,null],[13,"NonEmpty","","",0,null],[13,"ManyMN","","",0,null],[13,"TakeUntilAndConsumeStr","","",0,null],[13,"TakeUntilStr","","",0,null],[13,"Not","","",0,null],[4,"Err","","Contains the error that a parser can return",null,null],[13,"Code","","An error code, represented by an ErrorKind, which can contain a custom error code represented by E",1,null],[13,"Node","","An error code, and the next error",1,null],[13,"Position","","An error code, and the input position",1,null],[13,"NodePosition","","An error code, the input position and the next error",1,null],[4,"Needed","","Contains information on needed data if a parser returned `Incomplete`",null,null],[13,"Unknown","","needs more data, but we do not know how much",2,null],[13,"Size","","contains the required data size",2,null],[4,"IResult","","Holds the result of parsing functions",null,null],[13,"Done","","indicates a correct parsing, the first field containing the rest of the unparsed data, the second field contains the parsed data",3,null],[13,"Error","","contains a Err, an enum that can indicate an error code, a position in the input, and a pointer to another error, making a list of errors in the parsing tree",3,null],[13,"Incomplete","","Incomplete contains a Needed, an enum than can represent a known quantity of input data, or unknown",3,null],[4,"Input","","",null,null],[13,"Element","","",4,null],[13,"Empty","","",4,null],[13,"Eof","","",4,null],[4,"ConsumerState","","Stores a consumer&#39;s current computation state",null,null],[13,"Done","","A value of type O has been produced",5,null],[13,"Error","","An error of type E has been encountered",5,null],[13,"Continue","","Continue applying, and pass a message of type M to the data source",5,null],[4,"Move","","",null,null],[13,"Consume","","indcates how much data was consumed",6,null],[13,"Seek","","indicates where in the input the consumer must seek",6,null],[13,"Await","","indicates more data is needed",6,null],[4,"FileProducerState","","",null,null],[13,"Normal","","",7,null],[13,"Error","","",7,null],[13,"Eof","","",7,null],[5,"error_to_list","","",null,{"inputs":[{"name":"err"}],"output":{"name":"vec"}}],[5,"compare_error_paths","","",null,{"inputs":[{"name":"err"},{"name":"err"}],"output":{"name":"bool"}}],[5,"add_error_pattern","","",null,{"inputs":[{"name":"hashmap"},{"name":"iresult"},{"name":"str"}],"output":{"name":"bool"}}],[5,"slice_to_offsets","","",null,null],[5,"prepare_errors","","",null,null],[5,"print_error","","",null,null],[5,"generate_colors","","",null,null],[5,"code_from_offset","","",null,null],[5,"reset_color","","",null,{"inputs":[{"name":"vec"}],"output":null}],[5,"write_color","","",null,{"inputs":[{"name":"vec"},{"name":"u8"}],"output":null}],[5,"print_codes","","",null,{"inputs":[{"name":"hashmap"},{"name":"hashmap"}],"output":{"name":"string"}}],[5,"print_offsets","","",null,null],[5,"error_to_u32","","",null,{"inputs":[{"name":"errorkind"}],"output":{"name":"u32"}}],[5,"tag_cl","","",null,null],[5,"print","","",null,{"inputs":[{"name":"t"}],"output":{"name":"iresult"}}],[5,"begin","","",null,null],[5,"not_line_ending","","",null,null],[5,"line_ending","","Recognizes a line feed",null,null],[5,"is_alphabetic","","",null,{"inputs":[{"name":"u8"}],"output":{"name":"bool"}}],[5,"is_digit","","",null,{"inputs":[{"name":"u8"}],"output":{"name":"bool"}}],[5,"is_hex_digit","","",null,{"inputs":[{"name":"u8"}],"output":{"name":"bool"}}],[5,"is_oct_digit","","",null,{"inputs":[{"name":"u8"}],"output":{"name":"bool"}}],[5,"is_alphanumeric","","",null,{"inputs":[{"name":"u8"}],"output":{"name":"bool"}}],[5,"is_space","","",null,{"inputs":[{"name":"u8"}],"output":{"name":"bool"}}],[5,"alpha","","Recognizes lowercase and uppercase alphabetic characters: a-zA-Z",null,{"inputs":[{"name":"t"}],"output":{"name":"iresult"}}],[5,"digit","","Recognizes numerical characters: 0-9",null,{"inputs":[{"name":"t"}],"output":{"name":"iresult"}}],[5,"hex_digit","","Recognizes hexadecimal numerical characters: 0-9, A-F, a-f",null,{"inputs":[{"name":"t"}],"output":{"name":"iresult"}}],[5,"oct_digit","","Recognizes octal characters: 0-7",null,{"inputs":[{"name":"t"}],"output":{"name":"iresult"}}],[5,"alphanumeric","","Recognizes numerical and alphabetic characters: 0-9a-zA-Z",null,{"inputs":[{"name":"t"}],"output":{"name":"iresult"}}],[5,"space","","Recognizes spaces and tabs",null,{"inputs":[{"name":"t"}],"output":{"name":"iresult"}}],[5,"multispace","","Recognizes spaces, tabs, carriage returns and line feeds",null,{"inputs":[{"name":"t"}],"output":{"name":"iresult"}}],[5,"sized_buffer","","",null,null],[5,"length_value","","",null,null],[5,"be_u8","","Recognizes an unsigned 1 byte integer (equivalent to take!(1)",null,null],[5,"be_u16","","Recognizes big endian unsigned 2 bytes integer",null,null],[5,"be_u32","","Recognizes big endian unsigned 4 bytes integer",null,null],[5,"be_u64","","Recognizes big endian unsigned 8 bytes integer",null,null],[5,"be_i8","","Recognizes a signed 1 byte integer (equivalent to take!(1)",null,null],[5,"be_i16","","Recognizes big endian signed 2 bytes integer",null,null],[5,"be_i32","","Recognizes big endian signed 4 bytes integer",null,null],[5,"be_i64","","Recognizes big endian signed 8 bytes integer",null,null],[5,"le_u8","","Recognizes an unsigned 1 byte integer (equivalent to take!(1)",null,null],[5,"le_u16","","Recognizes little endian unsigned 2 bytes integer",null,null],[5,"le_u32","","Recognizes little endian unsigned 4 bytes integer",null,null],[5,"le_u64","","Recognizes little endian unsigned 8 bytes integer",null,null],[5,"le_i8","","Recognizes a signed 1 byte integer (equivalent to take!(1)",null,null],[5,"le_i16","","Recognizes little endian signed 2 bytes integer",null,null],[5,"le_i32","","Recognizes little endian signed 4 bytes integer",null,null],[5,"le_i64","","Recognizes little endian signed 8 bytes integer",null,null],[5,"be_f32","","Recognizes big endian 4 bytes floating point number",null,null],[5,"be_f64","","Recognizes big endian 8 bytes floating point number",null,null],[5,"le_f32","","Recognizes little endian 4 bytes floating point number",null,null],[5,"le_f64","","Recognizes little endian 8 bytes floating point number",null,null],[5,"hex_u32","","Recognizes a hex-encoded integer",null,null],[5,"eof","","Recognizes empty input buffers",null,{"inputs":[{"name":"t"}],"output":{"name":"iresult"}}],[5,"non_empty","","Recognizes non empty buffers",null,{"inputs":[{"name":"t"}],"output":{"name":"iresult"}}],[5,"rest","","Return the remaining input.",null,null],[5,"rest_s","","Return the remaining input, for strings.",null,{"inputs":[{"name":"str"}],"output":{"name":"iresult"}}],[5,"newline","","",null,null],[5,"crlf","","",null,null],[5,"eol","","",null,null],[5,"tab","","",null,null],[5,"anychar","","",null,null],[5,"shift","","",null,null],[11,"clone","","",0,null],[11,"hash","","",0,null],[11,"eq","","",0,null],[11,"ne","","",0,null],[11,"fmt","","",0,null],[11,"description","","",0,null],[11,"clone","","",1,null],[11,"eq","","",1,null],[11,"ne","","",1,null],[11,"fmt","","",1,null],[11,"clone","","",2,null],[11,"eq","","",2,null],[11,"ne","","",2,null],[11,"fmt","","",2,null],[11,"is_known","","",2,null],[11,"map","","Maps a `Needed` to `Needed` by appling a function to a contained `Size` value.",2,null],[11,"clone","","",3,null],[11,"eq","","",3,null],[11,"ne","","",3,null],[11,"fmt","","",3,null],[11,"is_done","","",3,null],[11,"is_err","","",3,null],[11,"is_incomplete","","",3,null],[11,"map","","Maps a `IResult&lt;I, O, E&gt;` to `IResult&lt;I, N, E&gt;` by appling a function\nto a contained `Done` value, leaving `Error` and `Incomplete` value\nuntouched.",3,null],[11,"map_inc","","Maps a `IResult&lt;I, O, E&gt;` to `IResult&lt;I, O, E&gt;` by appling a function\nto a contained `Incomplete` value, leaving `Done` and `Error` value\nuntouched.",3,null],[11,"map_err","","Maps a `IResult&lt;I, O, E&gt;` to `IResult&lt;I, O, N&gt;` by appling a function\nto a contained `Error` value, leaving `Done` and `Incomplete` value\nuntouched.",3,null],[11,"unwrap","","Unwrap the contained `Done(I, O)` value, or panic if the `IResult` is not\n`Done`.",3,null],[11,"unwrap_inc","","Unwrap the contained `Done(I, O)` value, or panic if the `IResult` is not\n`Done`.",3,null],[11,"unwrap_err","","Unwrap the contained `Done(I, O)` value, or panic if the `IResult` is not\n`Done`.",3,null],[11,"remaining_input","","",3,null],[11,"remaining_input","","",3,null],[11,"remaining_input","","",3,null],[11,"output","","",3,null],[11,"output","","",3,null],[11,"output","","",3,null],[11,"description","","",1,null],[11,"fmt","","",1,null],[11,"clone","","",4,null],[11,"fmt","","",4,null],[11,"clone","","",5,null],[11,"fmt","","",5,null],[11,"map","","",5,null],[11,"flat_map","","",5,null],[11,"apply","","",8,null],[11,"new","","",9,null],[11,"eq","","",6,null],[11,"ne","","",6,null],[11,"clone","","",6,null],[11,"fmt","","",6,null],[11,"apply","","",9,null],[11,"eq","","",7,null],[11,"clone","","",7,null],[11,"fmt","","",7,null],[11,"fmt","","",10,null],[11,"new","","",10,{"inputs":[{"name":"str"},{"name":"usize"}],"output":{"name":"result"}}],[11,"state","","",10,null],[11,"refill","","",10,null],[11,"resize","","Resize the internal buffer, copy the data to the new one and returned how much data was copied",10,null],[11,"apply","","",10,null],[11,"new","","",11,{"inputs":[{"name":"c"},{"name":"f"}],"output":{"name":"mapconsumer"}}],[11,"handle","","",11,null],[11,"state","","",11,null],[11,"new","","",12,{"inputs":[{"name":"c1"},{"name":"c2"}],"output":{"name":"chainconsumer"}}],[11,"handle","","",12,null],[11,"state","","",12,null],[8,"HexDisplay","","useful functions to calculate the offset between slices and show a hexdump of a slice",null,null],[10,"offset","","offset between the first byte of self and the first byte of the argument",13,null],[10,"to_hex","","Converts the value of `self` to a hex dump, returning the owned\nstring.",13,null],[10,"to_hex_from","","Converts the value of `self` to a hex dump beginning at `from` address, returning the owned\nstring.",13,null],[8,"InputLength","","",null,null],[10,"input_len","","",14,null],[8,"AsChar","","",null,null],[10,"as_char","","",15,null],[10,"is_alpha","","",15,null],[10,"is_alphanum","","",15,null],[10,"is_0_to_9","","",15,null],[10,"is_hex_digit","","",15,null],[10,"is_oct_digit","","",15,null],[8,"IterIndices","","",null,null],[16,"Item","","",16,null],[16,"Iter","","",16,null],[10,"iter_indices","","",16,null],[8,"AsBytes","","",null,null],[10,"as_bytes","","",17,null],[8,"GetInput","","",null,null],[10,"remaining_input","","",18,null],[8,"GetOutput","","",null,null],[10,"output","","",19,null],[8,"Consumer","","The Consumer trait wraps a computation and its state",null,null],[10,"handle","","implement handle for the current computation, returning the new state of the consumer",20,null],[10,"state","","returns the current state",20,null],[8,"Producer","","The producer wraps a data source, like file or network, and applies a consumer on it",null,null],[10,"apply","","Applies a consumer once on the produced data, and return the consumer&#39;s state",21,null],[11,"run","","Applies a consumer once on the produced data, and returns the generated value if there is one",21,null],[14,"dbg!","","Prints a message if the parser fails",null,null],[14,"dbg_dmp!","","Prints a message and the input if the parser fails",null,null],[14,"closure!","","Wraps a parser in a closure",null,null],[14,"named!","","Makes a function from a parser combination",null,null],[14,"call!","","Used to wrap common expressions and function as macros",null,null],[14,"apply!","","emulate function currying: `apply!(my_function, arg1, arg2, ...)` becomes `my_function(input, arg1, arg2, ...)`",null,null],[14,"error!","","Prevents backtracking if the child parser fails",null,null],[14,"add_error!","","Add an error if the child parser fails",null,null],[14,"fix_error!","","translate parser result from IResult&lt;I,O,u32&gt; to IResult&lt;I,O,E&gt; with a custom type",null,null],[14,"complete!","","replaces a `Incomplete` returned by the child parser\nwith an `Error`",null,null],[14,"try_parse!","","A bit like `std::try!`, this macro will return the remaining input and parsed value if the child parser returned `Done`,\nand will do an early return for `Error` and `Incomplete`\nthis can provide more flexibility than `chain!` if needed",null,null],[14,"flat_map!","","`flat_map!(R -&gt; IResult&lt;R,S&gt;, S -&gt; IResult&lt;S,T&gt;) =&gt; R -&gt; IResult&lt;R, T&gt;`",null,null],[14,"map!","","`map!(I -&gt; IResult&lt;I,O&gt;, O -&gt; P) =&gt; I -&gt; IResult&lt;I, P&gt;`\nmaps a function on the result of a parser",null,null],[14,"map_res!","","`map_res!(I -&gt; IResult&lt;I,O&gt;, O -&gt; Result&lt;P&gt;) =&gt; I -&gt; IResult&lt;I, P&gt;`\nmaps a function returning a Result on the output of a parser",null,null],[14,"map_opt!","","`map_opt!(I -&gt; IResult&lt;I,O&gt;, O -&gt; Option&lt;P&gt;) =&gt; I -&gt; IResult&lt;I, P&gt;`\nmaps a function returning an Option on the output of a parser",null,null],[14,"value!","","`value!(T, R -&gt; IResult&lt;R, S&gt; ) =&gt; R -&gt; IResult&lt;R, T&gt;`",null,null],[14,"expr_res!","","`expr_res!(Result&lt;E,O&gt;) =&gt; I -&gt; IResult&lt;I, O&gt;`\nevaluate an expression that returns a Result&lt;T,E&gt; and returns a IResult::Done(I,T) if Ok",null,null],[14,"expr_opt!","","`expr_opt!(Option&lt;O&gt;) =&gt; I -&gt; IResult&lt;I, O&gt;`\nevaluate an expression that returns a Option&lt;T&gt; and returns a IResult::Done(I,T) if Some",null,null],[14,"chain!","","`chain!(I-&gt;IResult&lt;I,A&gt; ~ I-&gt;IResult&lt;I,B&gt; ~ ... I-&gt;IResult&lt;I,X&gt; , || { return O } ) =&gt; I -&gt; IResult&lt;I, O&gt;`\nchains parsers and assemble the results through a closure",null,null],[14,"tuple!","","`tuple!(I-&gt;IResult&lt;I,A&gt;, I-&gt;IResult&lt;I,B&gt;, ... I-&gt;IResult&lt;I,X&gt;) =&gt; I -&gt; IResult&lt;I, (A, B, ..., X)&gt;`\nchains parsers and assemble the sub results in a tuple.",null,null],[14,"alt!","","`alt!(I -&gt; IResult&lt;I,O&gt; | I -&gt; IResult&lt;I,O&gt; | ... | I -&gt; IResult&lt;I,O&gt; ) =&gt; I -&gt; IResult&lt;I, O&gt;`\ntry a list of parsers, return the result of the first successful one",null,null],[14,"alt_complete!","","This is a combination of the `alt!` and `complete!` combinators. Rather\nthan returning `Incomplete` on partial input, `alt_complete!` will try the\nnext alternative in the chain. You should use this only if you know you\nwill not receive partial input for the rules you&#39;re trying to match (this\nis almost always the case for parsing programming languages).",null,null],[14,"switch!","","`switch!(I -&gt; IResult&lt;I,P&gt;, P =&gt; I -&gt; IResult&lt;I,O&gt; | ... | P =&gt; I -&gt; IResult&lt;I,O&gt; ) =&gt; I -&gt; IResult&lt;I, O&gt;`\nchoose the next parser depending on the result of the first one, if successful,\nand returns the result of the second parser",null,null],[14,"opt!","","`opt!(I -&gt; IResult&lt;I,O&gt;) =&gt; I -&gt; IResult&lt;I, Option&lt;O&gt;&gt;`\nmake the underlying parser optional",null,null],[14,"opt_res!","","`opt_res!(I -&gt; IResult&lt;I,O&gt;) =&gt; I -&gt; IResult&lt;I, Result&lt;nom::Err,O&gt;&gt;`\nmake the underlying parser optional",null,null],[14,"cond_with_error!","","`cond_with_error!(bool, I -&gt; IResult&lt;I,O&gt;) =&gt; I -&gt; IResult&lt;I, Option&lt;O&gt;&gt;`\nConditional combinator",null,null],[14,"cond!","","`cond!(bool, I -&gt; IResult&lt;I,O&gt;) =&gt; I -&gt; IResult&lt;I, Option&lt;O&gt;&gt;`\nConditional combinator",null,null],[14,"cond_reduce!","","`cond_reduce!(bool, I -&gt; IResult&lt;I,O&gt;) =&gt; I -&gt; IResult&lt;I, O&gt;`\nConditional combinator with error",null,null],[14,"peek!","","`peek!(I -&gt; IResult&lt;I,O&gt;) =&gt; I -&gt; IResult&lt;I, O&gt;`\nreturns a result without consuming the input",null,null],[14,"not!","","`not!(I -&gt; IResult&lt;I,0&gt;) =&gt; I -&gt; IResult&lt;I, O&gt;`\nreturns a result only if the embedded parser returns Error or Incomplete\ndoes not consume the input",null,null],[14,"tap!","","`tap!(name: I -&gt; IResult&lt;I,O&gt; =&gt; { block }) =&gt; I -&gt; IResult&lt;I, O&gt;`\nallows access to the parser&#39;s result without affecting it",null,null],[14,"pair!","","`pair!(I -&gt; IResult&lt;I,O&gt;, I -&gt; IResult&lt;I,P&gt;) =&gt; I -&gt; IResult&lt;I, (O,P)&gt;`\npair(X,Y), returns (x,y)",null,null],[14,"separated_pair!","","`separated_pair!(I -&gt; IResult&lt;I,O&gt;, I -&gt; IResult&lt;I, T&gt;, I -&gt; IResult&lt;I,P&gt;) =&gt; I -&gt; IResult&lt;I, (O,P)&gt;`\nseparated_pair(X,sep,Y) returns (x,y)",null,null],[14,"preceded!","","`preceded!(I -&gt; IResult&lt;I,T&gt;, I -&gt; IResult&lt;I,O&gt;) =&gt; I -&gt; IResult&lt;I, O&gt;`\npreceded(opening, X) returns X",null,null],[14,"terminated!","","`terminated!(I -&gt; IResult&lt;I,O&gt;, I -&gt; IResult&lt;I,T&gt;) =&gt; I -&gt; IResult&lt;I, O&gt;`\nterminated(X, closing) returns X",null,null],[14,"delimited!","","`delimited!(I -&gt; IResult&lt;I,T&gt;, I -&gt; IResult&lt;I,O&gt;, I -&gt; IResult&lt;I,U&gt;) =&gt; I -&gt; IResult&lt;I, O&gt;`\ndelimited(opening, X, closing) returns X",null,null],[14,"separated_list!","","`separated_list!(I -&gt; IResult&lt;I,T&gt;, I -&gt; IResult&lt;I,O&gt;) =&gt; I -&gt; IResult&lt;I, Vec&lt;O&gt;&gt;`\nseparated_list(sep, X) returns Vec&lt;X&gt;",null,null],[14,"separated_nonempty_list!","","`separated_nonempty_list!(I -&gt; IResult&lt;I,T&gt;, I -&gt; IResult&lt;I,O&gt;) =&gt; I -&gt; IResult&lt;I, Vec&lt;O&gt;&gt;`\nseparated_nonempty_list(sep, X) returns Vec&lt;X&gt;",null,null],[14,"many0!","","`many0!(I -&gt; IResult&lt;I,O&gt;) =&gt; I -&gt; IResult&lt;I, Vec&lt;O&gt;&gt;`\nApplies the parser 0 or more times and returns the list of results in a Vec",null,null],[14,"many1!","","`many1!(I -&gt; IResult&lt;I,O&gt;) =&gt; I -&gt; IResult&lt;I, Vec&lt;O&gt;&gt;`\nApplies the parser 1 or more times and returns the list of results in a Vec",null,null],[14,"many_m_n!","","`many_m_n!(usize, usize, I -&gt; IResult&lt;I,O&gt;) =&gt; I -&gt; IResult&lt;I, Vec&lt;O&gt;&gt;`\nApplies the parser between m and n times (n included) and returns the list of results in a Vec",null,null],[14,"count!","","`count!(I -&gt; IResult&lt;I,O&gt;, nb) =&gt; I -&gt; IResult&lt;I, Vec&lt;O&gt;&gt;`\nApplies the child parser a specified number of times",null,null],[14,"count_fixed!","","`count_fixed!(O, I -&gt; IResult&lt;I,O&gt;, nb) =&gt; I -&gt; IResult&lt;I, [O; nb]&gt;`\nApplies the child parser a fixed number of times and returns a fixed size array\nThe type must be specified and it must be `Copy`",null,null],[14,"length_value!","","`length_value!(I -&gt; IResult&lt;I, nb&gt;, I -&gt; IResult&lt;I,O&gt;) =&gt; I -&gt; IResult&lt;I, Vec&lt;O&gt;&gt;`\ngets a number from the first parser, then applies the second parser that many times",null,null],[14,"fold_many0!","","`fold_many0!(I -&gt; IResult&lt;I,O&gt;, R, Fn(R, O) -&gt; R) =&gt; I -&gt; IResult&lt;I, R&gt;`\nApplies the parser 0 or more times and folds the list of return values",null,null],[14,"fold_many1!","","`fold_many1!(I -&gt; IResult&lt;I,O&gt;, R, Fn(R, O) -&gt; R) =&gt; I -&gt; IResult&lt;I, R&gt;`\nApplies the parser 1 or more times and folds the list of return values",null,null],[14,"fold_many_m_n!","","`fold_many_m_n!(usize, usize, I -&gt; IResult&lt;I,O&gt;, R, Fn(R, O) -&gt; R) =&gt; I -&gt; IResult&lt;I, R&gt;`\nApplies the parser between m and n times (n included) and folds the list of return value",null,null],[14,"method!","","Makes a method from a parser combination",null,null],[14,"call_m!","","Used to called methods then move self back into self",null,null],[14,"apply_m!","","emulate function currying for method calls on structs\n`apply!(self.my_function, arg1, arg2, ...)` becomes `self.my_function(input, arg1, arg2, ...)`",null,null],[14,"recognize!","","`recognize!(&amp;[T] -&gt; IResult&lt;&amp;[T], O&gt; ) =&gt; &amp;[T] -&gt; IResult&lt;&amp;[T], &amp;[T]&gt;`\nif the child parser was successful, return the consumed input as produced value",null,null],[14,"tag!","","`tag!(&amp;[T]: nom::AsBytes) =&gt; &amp;[T] -&gt; IResult&lt;&amp;[T], &amp;[T]&gt;`\ndeclares a byte array as a suite to recognize",null,null],[14,"is_not!","","`is_not!(&amp;[T:AsBytes]) =&gt; &amp;[T] -&gt; IResult&lt;&amp;[T], &amp;[T]&gt;`\nreturns the longest list of bytes that do not appear in the provided array",null,null],[14,"is_a!","","`is_a!(&amp;[T]) =&gt; &amp;[T] -&gt; IResult&lt;&amp;[T], &amp;[T]&gt;`\nreturns the longest list of bytes that appear in the provided array",null,null],[14,"escaped!","","`escaped!(&amp;[T] -&gt; IResult&lt;&amp;[T], &amp;[T]&gt;, T, &amp;[T] -&gt; IResult&lt;&amp;[T], &amp;[T]&gt;) =&gt; &amp;[T] -&gt; IResult&lt;&amp;[T], &amp;[T]&gt;`\nmatches a byte string with escaped characters.",null,null],[14,"escaped_transform!","","`escaped_transform!(&amp;[T] -&gt; IResult&lt;&amp;[T], &amp;[T]&gt;, T, &amp;[T] -&gt; IResult&lt;&amp;[T], &amp;[T]&gt;) =&gt; &amp;[T] -&gt; IResult&lt;&amp;[T], Vec&lt;T&gt;&gt;`\nmatches a byte string with escaped characters.",null,null],[14,"take_while!","","`take_while!(T -&gt; bool) =&gt; &amp;[T] -&gt; IResult&lt;&amp;[T], &amp;[T]&gt;`\nreturns the longest list of bytes until the provided function fails.",null,null],[14,"take_while1!","","`take_while1!(&amp;[T] -&gt; bool) =&gt; &amp;[T] -&gt; IResult&lt;&amp;[T], &amp;[T]&gt;`\nreturns the longest (non empty) list of bytes until the provided function fails.",null,null],[14,"take_till!","","`take_till!(T -&gt; bool) =&gt; &amp;[T] -&gt; IResult&lt;&amp;[T], &amp;[T]&gt;`\nreturns the longest list of bytes until the provided function succeeds",null,null],[14,"take!","","`take!(nb) =&gt; &amp;[T] -&gt; IResult&lt;&amp;[T], &amp;[T]&gt;`\ngenerates a parser consuming the specified number of bytes",null,null],[14,"take_str!","","`take!(nb) =&gt; &amp;[T] -&gt; IResult&lt;&amp;[T], &amp;str&gt;`\nsame as take! but returning a &amp;str",null,null],[14,"take_until_and_consume!","","`take_until_and_consume!(tag) =&gt; &amp;[T] -&gt; IResult&lt;&amp;[T], &amp;[T]&gt;`\ngenerates a parser consuming bytes until the specified byte sequence is found, and consumes it",null,null],[14,"take_until!","","`take_until!(tag) =&gt; &amp;[T] -&gt; IResult&lt;&amp;[T], &amp;[T]&gt;`\nconsumes data until it finds the specified tag",null,null],[14,"take_until_either_and_consume!","","`take_until_either_and_consume!(tag) =&gt; &amp;[T] -&gt; IResult&lt;&amp;[T], &amp;[T]&gt;`\nconsumes data until it finds any of the specified characters, and consume it",null,null],[14,"take_until_either!","","`take_until_either!(tag) =&gt; &amp;[T] -&gt; IResult&lt;&amp;[T], &amp;[T]&gt;`",null,null],[14,"length_bytes!","","`length_bytes!(&amp;[T] -&gt; IResult&lt;&amp;[T], nb&gt;) =&gt; &amp;[T] -&gt; IResult&lt;&amp;[T], &amp;[T]&gt;\ngets a number from the first parser, then extracts that many bytes from the\nremaining stream",null,null],[14,"bits!","","`bits!( parser ) =&gt; ( &amp;[u8], (&amp;[u8], usize) -&gt; IResult&lt;(&amp;[u8], usize), T&gt; ) -&gt; IResult&lt;&amp;[u8], T&gt;`\ntransforms its byte slice input into a bit stream for the underlying parsers",null,null],[14,"take_bits!","","`take_bits!(type, nb) =&gt; ( (&amp;[T], usize), U, usize) -&gt; IResult&lt;(&amp;[T], usize), U&gt;`\ngenerates a parser consuming the specified number of bits.",null,null],[14,"tag_bits!","","matches an integer pattern to a bitstream. The number of bits of the input to compare must be specified",null,null],[14,"u16!","","if parameter is true, parse a big endian u16 integer,\notherwise a little endian u16 integer",null,null],[14,"u32!","","if parameter is true, parse a big endian u32 integer,\notherwise a little endian u32 integer",null,null],[14,"u64!","","if parameter is true, parse a big endian u64 integer,\notherwise a little endian u64 integer",null,null],[14,"i16!","","if parameter is true, parse a big endian i16 integer,\notherwise a little endian i16 integer",null,null],[14,"i32!","","if parameter is true, parse a big endian i32 integer,\notherwise a little endian i32 integer",null,null],[14,"i64!","","if parameter is true, parse a big endian i64 integer,\notherwise a little endian i64 integer",null,null],[14,"one_of!","","matches one of the provided characters",null,null],[14,"none_of!","","matches anything but the provided characters",null,null],[14,"char!","","matches one character: `char!(char) =&gt; &amp;[u8] -&gt; IResult&lt;&amp;[u8], char&gt;",null,null],[14,"consumer_from_parser!","","",null,null],[14,"tag_s!","","`tag_s!(&amp;str) =&gt; &amp;str -&gt; IResult&lt;&amp;str, &amp;str&gt;`\ndeclares a string as a suite to recognize",null,null],[14,"take_s!","","`take_s!(nb) =&gt; &amp;str -&gt; IResult&lt;&amp;str, &amp;str&gt;`\ngenerates a parser consuming the specified number of characters",null,null],[14,"is_not_s!","","`is_not_s!(&amp;str) =&gt; &amp;str -&gt; IResult&lt;&amp;str, &amp;str&gt;`\nreturns the longest list of characters that do not appear in the provided array",null,null],[14,"is_a_s!","","`is_a_s!(&amp;str) =&gt; &amp;str -&gt; IResult&lt;&amp;str, &amp;str&gt;`\nreturns the longest list of characters that appear in the provided array",null,null],[14,"take_while_s!","","`take_while_s!(char -&gt; bool) =&gt; &amp;str -&gt; IResult&lt;&amp;str, &amp;str&gt;`\nreturns the longest list of characters until the provided function fails.",null,null],[14,"take_while1_s!","","`take_while1_s!(char -&gt; bool) =&gt; &amp;str -&gt; IResult&lt;&amp;str, &amp;str&gt;`\nreturns the longest (non empty) list of characters until the provided function fails.",null,null],[14,"take_till_s!","","`take_till_s!(&amp;str -&gt; bool) =&gt; &amp;str -&gt; IResult&lt;&amp;str, &amp;str&gt;`\nreturns the longest list of characters until the provided function succeeds",null,null],[14,"take_until_and_consume_s!","","`take_until_and_consume_s!(&amp;str) =&gt; &amp;str -&gt; IResult&lt;&amp;str, &amp;str&gt;`\ngenerates a parser consuming all chars until the specified string is found and consumes it",null,null],[14,"take_until_s!","","`take_until_s!(&amp;str) =&gt; &amp;str -&gt; IResult&lt;&amp;str, &amp;str&gt;`\ngenerates a parser consuming all chars until the specified string is found and leaves it in the remaining input",null,null],[11,"run","","Applies a consumer once on the produced data, and returns the generated value if there is one",21,null]],"paths":[[4,"ErrorKind"],[4,"Err"],[4,"Needed"],[4,"IResult"],[4,"Input"],[4,"ConsumerState"],[4,"Move"],[4,"FileProducerState"],[3,"ProducerRepeat"],[3,"MemProducer"],[3,"FileProducer"],[3,"MapConsumer"],[3,"ChainConsumer"],[8,"HexDisplay"],[8,"InputLength"],[8,"AsChar"],[8,"IterIndices"],[8,"AsBytes"],[8,"GetInput"],[8,"GetOutput"],[8,"Consumer"],[8,"Producer"]]};
initSearch(searchIndex);
