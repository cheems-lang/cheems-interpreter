export const TokenType = {
  ILLEGAL: 'ILLEGAL',
  EOF: 'EOF',

  // Identifiers + literals
  IDENT: 'IDENT', // add, foobar, x, y, ...
  NUMBER: 'NUMBER', // 216755

  // Operators
  ASSIGN: '=',
  PLUS: '+',
  MINUS: '-',
  BANG: '!',
  ASTERISK: '*',
  SLASH: '/',

  LT: '<',
  GT: '>',

  // Delimiters
  COMMA: ',',
  SEMICOLON: ';',

  LPAREN: '(',
  RPAREN: ')',
  LBRACE: '{',
  RBRACE: '}',

  // Keywords
  FUNCTION: 'FUNCTION',
  LET: 'LET',
  TRUE: 'TRUE',
  FALSE: 'FALSE',
  IF: 'IF',
  ELSE: 'ELSE',
  RETURN: 'RETURN',
}

export interface Token {
  type: string,
  literal: string
}

export const keywords = new Map<string, string>([
  ['fn', TokenType.FUNCTION],
  ['let', TokenType.LET],
  ['true', TokenType.TRUE],
  ['false', TokenType.FALSE],
  ['if', TokenType.IF],
  ['else', TokenType.ELSE],
  ['return', TokenType.RETURN],
])

export function lookUpIdent(ident: string): string {
  if (keywords.has(ident)) {
    return keywords.get(ident)!
  }

  return TokenType.IDENT
}