module.exports = {
    stylesheet: "./pdf-configs/style.css",
    body_class: "markdown-body",
    marked_options: {
      headerIds: false,
      smartypants: true,
      html: true,
      breaks: false,
    },
    pdf_options: {
      "format": "A4",
      "margin": "30mm 20mm",
      "printBackground": true,
      "displayHeaderFooter": true,
      "waitForNetworkIdle": true,
      "timeout": 30000,
      "headerTemplate": "<style>\n  section {\n    margin: 0 auto;\n    font-size: 9px;\n  }\n</style>",
      "footerTemplate": "<section>\n  <div>\n    <span class=\"pageNumber\"></span>\n    / <span class=\"totalPages\"></span>\n  </div>\n</section>"
    },
    stylesheet_encoding: "utf-8",
  };
