import { Token, TokenType } from '../token/token.ts'

export class Lexer {
  // attributes
  input: string
  position = 0
  readPosition = 0
  ch = ''

  constructor(input: string) {
    this.input = input
    this.readChar()
  }

  readChar() {
    if (this.readPosition >= this.input.length) {
      this.ch = 'EOF'
    } else {
      this.ch = this.input[this.readPosition]
    }

    this.position = this.readPosition
    this.readPosition++
  }

  nextToken(): Token {
    let tok: Token

    switch (this.ch) {
      case '=':
        tok = { type: TokenType.ASSIGN, literal: this.ch }
        break
      case ';':
        tok = { type: TokenType.SEMICOLON, literal: this.ch }
        break
      case '(':
        tok = { type: TokenType.LPAREN, literal: this.ch }
        break
      case ')':
        tok = { type: TokenType.RPAREN, literal: this.ch }
        break
      case ',':
        tok = { type: TokenType.COMMA, literal: this.ch }
        break
      case '+':
        tok = { type: TokenType.PLUS, literal: this.ch }
        break
      case '{':
        tok = { type: TokenType.LBRACE, literal: this.ch }
        break
      case '}':
        tok = { type: TokenType.RBRACE, literal: this.ch }
        break
      case 'EOF':
        tok = { type: TokenType.EOF, literal: this.ch }
        break
      default:
        if (this.isLetter(this.ch)) {
          tok = { type: TokenType.IDENT, literal: this.readIdentifier() }
          return tok
        } else {
          tok = { type: TokenType.ILLEGAL, literal: this.ch }
        }
        break
    }

    this.readChar()
    return tok!
  }

  readIdentifier(): string {
    const position = this.position

    while (this.isLetter(this.ch)) {
      this.readChar()
    }

    return this.input.substring(position, this.position)
  }

  isLetter(ch: string): boolean {
    return 'a' <= ch && ch <= 'z' || 'A' <= ch && ch <= 'Z' || ch === '_'
  }
}