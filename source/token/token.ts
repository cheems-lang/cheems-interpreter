export const TokenType = {
  ILLEGAL: 'ILLEGAL',
  EOF: 'EOF',
  IDENT: 'IDENT',
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