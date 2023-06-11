export enum TokenType {
  Illegal,
  EOF,
  Ident,
  Int,
  Assign,
  Plus,
  Comma,
  Semicolon,
  LeftParenthesis,
  RightParenthesis,
  LeftBrace,
  RightBrace,
  Function,
  Let
}

export interface Token {
  type: TokenType,
  literal: string
}