const LANGUAGES = {
    matl: '22.7.4',
    bash: '5.2.0',
    befunge93: '0.2.0',
    bqn: '1.0.0',
    brachylog: '1.0.0',
    brainfuck: '2.7.3',
    cjam: '0.6.5',
    clojure: '1.10.3',
    cobol: '3.1.2',
    coffeescript: '2.5.1',
    cow: '1.0.0',
    crystal: '0.36.1',
    dart: '2.19.6',
    dash: '0.5.11',
    typescript: '5.0.3',
    javascript: '18.15.0',
    'basic.net': '5.0.201',
    'fsharp.net': '5.0.201',
    'csharp.net': '5.0.201',
    fsi: '5.0.201',
    dragon: '1.9.8',
    elixir: '1.11.3',
    emacs: '27.1.0',
    emojicode: '1.0.2',
    erlang: '23.0.0',
    file: '0.0.1',
    forte: '1.0.0',
    forth: '0.7.3',
    freebasic: '1.9.0',
    awk: '5.1.0',
    c: '10.2.0',
    'c++': '10.2.0',
    d: '10.2.0',
    fortran: '10.2.0',
    go: '1.16.2',
    golfscript: '1.0.0',
    groovy: '3.0.7',
    haskell: '9.0.1',
    husk: '1.0.0',
    iverilog: '11.0.0',
    japt: '2.0.0',
    java: '15.0.2',
    jelly: '0.1.31',
    julia: '1.8.5',
    kotlin: '1.8.20',
    lisp: '2.1.2',
    llvm_ir: '12.0.1',
    lolcode: '0.11.2',
    lua: '5.4.4',
    csharp: '6.12.0',
    basic: '6.12.0',
    nasm: '2.15.5',
    nasm64: '2.15.5',
    nim: '1.6.2',
    ocaml: '4.12.0',
    octave: '8.1.0',
    osabie: '1.0.1',
    paradoc: '0.6.0',
    pascal: '3.2.2',
    perl: '5.36.0',
    php: '8.2.3',
    ponylang: '0.39.0',
    prolog: '8.2.4',
    pure: '0.68.0',
    powershell: '7.1.4',
    pyth: '1.0.0',
    python2: '2.7.18',
    python: '3.10.0',
    racket: '8.3.0',
    raku: '6.100.0',
    retina: '1.2.0',
    rockstar: '1.0.0',
    rscript: '4.1.1',
    ruby: '3.0.1',
    rust: '1.68.2',
    samarium: '0.3.1',
    scala: '3.2.2',
    smalltalk: '3.2.3',
    sqlite3: '3.36.0',
    swift: '5.3.3',
    vlang: '0.3.3',
    vyxal: '2.4.1',
    yeethon: '3.10.0',
    zig: '0.10.1'
  };
  
  const EXTENSIONS = {
    python: "py",
    javascript: "js",
    java: "java",
    cpp: "cpp",
    typescript: "ts",
    ada: "adb",
    assembly: "asm",
    c: "c",
    csharp: "cs",
    clojure: "clj",
    cobol: "cob",
    coffeescript: "coffee",
    delphi: "pas",
    erlang: "erl",
    fsharp: "fs",
    fortran: "f90",
    go: "go",
    groovy: "groovy",
    haskell: "hs",
    julia: "jl",
    kotlin: "kt",
    lisp: "lisp",
    lua: "lua",
    matlab: "m",
    "objective-c": "m",
    pascal: "pas",
    perl: "pl",
    php: "php",
    powershell: "ps1",
    r: "r",
    ruby: "rb",
    rust: "rs",
    scala: "scala",
    swift: "swift",
    tcl: "tcl",
    vbnet: "vb"
  };
  
  function getFileExtension(language) {
    return EXTENSIONS[language] || "txt";
  }
  
  export { LANGUAGES, EXTENSIONS, getFileExtension };
  