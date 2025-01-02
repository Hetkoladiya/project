export const normalizeText = (text: string): string => {
  return text
    .toLowerCase()
    .trim()
    .replace(/\s+/g, ' ');
};

export const removeSpecialCharacters = (text: string): string => {
  return text.replace(/[^a-zA-Z0-9\s]/g, '');
};

export const findBestMatch = (query: string, target: string): boolean => {
  const normalizedQuery = normalizeText(removeSpecialCharacters(query));
  const normalizedTarget = normalizeText(removeSpecialCharacters(target));
  
  return normalizedTarget.includes(normalizedQuery) || 
         normalizedQuery.includes(normalizedTarget);
};