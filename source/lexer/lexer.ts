import { Token, TokenType } from "../token/token.ts";

export class Lexer {
  // attributes
  input: string;
  position = 0;
  readPosition = 0;
  ch = '';

  constructor(input: string) {
    this.input = input;
    this.readChar();
  }

  readChar() {
    if (this.readPosition >= this.input.length) {
      this.ch = '\0';
    } else {
      this.ch = this.input.charAt(this.readPosition);
    }

    this.position = this.readPosition;
    this.readPosition++;
  }

  nextToken(): Token {
    let tok: Token | null;

    switch (this.ch) {
      case '=':
        tok = { type: TokenType.Assign, literal: this.ch };
        break;
      case ';':
        tok = { type: TokenType.Semicolon, literal: this.ch };
        break;
      case '(':
        tok = { type: TokenType.LeftParenthesis, literal: this.ch };
        break;
      case ')':
        tok = { type: TokenType.RightParenthesis, literal: this.ch };
        break;
      case ',':
        tok = { type: TokenType.Comma, literal: this.ch };
        break;
      case '+':
        tok = { type: TokenType.Plus, literal: this.ch };
        break;
      case '{':
        tok = { type: TokenType.LeftBrace, literal: this.ch };
        break;
      case '}':
        tok = { type: TokenType.RightBrace, literal: this.ch };
        break;
      case '\0':
        tok = { type: TokenType.EOF, literal: '\0' };
        break;
    }

    return tok!;
  }
}