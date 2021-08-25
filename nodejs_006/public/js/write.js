const fontNames = [
    "맑은 고딕",
    "궁서",
    "굴림",
    "바탕체",
    "돋움체",
    "Arial",
    "Arial Black",
    "Comic Sans MS",
    "Courier New",
  ]
  const fontSize = [
    "8",
    "9",
    "10",
    "11",
    "12",
    "13",
    "14",
    "15",
    "20",
    "24",
    "28",
    "36",
    "40",
    "45",
    "50",
    "60",
    "80",
    "100"
  ];
  const toolbar = [
      "fontname",
      "fontsize",
      "style",
      "color",
      "table",
      "height",
      ["para", ["ul", "ol"]],
      ["view",["fullscreen", "help"]],
      ["insert", ["link"]],

    ];
  $("#b_text").summernote({
    lang: "ko-KR",
    toolbar: toolbar,
    fontNames : fontNames,
    fontSizes: fontSize,
    placeholder: "본문을 입력하세요",
    width: "60%",
    height: "300px",
  });