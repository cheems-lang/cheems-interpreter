export const TokenType = {
  ILLEGAL: 'ILLEGAL',
  EOF: 'EOF',
  IDENT: 'IDENT',
  NUMBER: 'NUMBER',
  ASSIGN: '=',
  PLUS: '+',
  COMMA: ',',
  SEMICOLON: ';',
  LPAREN: '(',
  RPAREN: ')',
  LBRACE: '{',
  RBRACE: '}',
  FUNCTION: 'FUNCTION',
  LET: 'LET'
}

export interface Token {
  type: string,
  literal: string
}

export const keywords = new Map<string, string>([
  ['fn', TokenType.FUNCTION],
  ['let', TokenType.LET],
])

export function lookUpIdent(ident: string): string {
  if (keywords.has(ident)) {
    return keywords.get(ident)!
  }

  return TokenType.IDENT
}