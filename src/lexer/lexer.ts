import { Token, TokenType, lookUpIdent } from '../token/token.ts'

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

    this.skipWhitespace()

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
      case '-':
        tok = { type: TokenType.MINUS, literal: this.ch }
        break
      case '!':
        tok = { type: TokenType.BANG, literal: this.ch }
        break
      case '/':
        tok = { type: TokenType.SLASH, literal: this.ch }
        break
      case '*':
        tok = { type: TokenType.ASTERISK, literal: this.ch }
        break
      case '<':
        tok = { type: TokenType.LT, literal: this.ch }
        break
      case '>':
        tok = { type: TokenType.GT, literal: this.ch }
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
          const literal = this.readIdentifier()
          tok = { type: lookUpIdent(literal), literal }
          return tok
        } else if (this.isDigit(this.ch)) {
          tok = { type: TokenType.NUMBER, literal: this.readNumber() }
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

  skipWhitespace() {
    while (this.ch === ' ' || this.ch === '\t' || this.ch === '\n' || this.ch === '\r') {
      this.readChar()
    }
  }

  readNumber(): string {
    const position = this.position

    while (this.isDigit(this.ch)) {
      this.readChar()
    }

    return this.input.substring(position, this.position)
  }

  isDigit(ch: string): boolean {
    return '0' <= ch && ch <= '9'
  }
}