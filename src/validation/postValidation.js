function valdateTitle(title) {
  if (title.trim() === "") return "제목을 입력해주세요";
  if (title.length > 50) return "제목은 50자 이내입니다";

  return "";
}

function validateCategory(category) {
  if (category.length === 0) return "카테고리를 선택해주세요";

  return "";
}

function valdateCode(code) {
  if (code.trim() === "") return "코드를 입력해주세요";

  return "";
}

function valdateContent(content) {
  if (content.trim() === "") return "내용을 입력해주세요";
  if (content.length > 300) return "내용은 300자 이내입니다.";

  return "";
}

export { valdateTitle, valdateCode, valdateContent, validateCategory };
