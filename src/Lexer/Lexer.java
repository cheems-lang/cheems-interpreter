package Lexer;

import Token.Token;

public class Lexer {
  public String input;
  public int position;
  public int readPosition = 0;
  public char ch;

  public Lexer(String input) {
    this.input = input;
    readChar();
  }

  public void readChar() {
    if (this.readPosition >= input.length()) {
      this.ch = 0;
    } else {
      this.ch = this.input.charAt(this.readPosition);
    }

    this.position = this.readPosition;
    this.readPosition++;
  }

  public Token nextToken() {
    Token tok = null;

    switch (this.ch) {
      case '=':
        tok = new Token(Token.ASSIGN, this.ch);
        break;
      case ';':
        tok = new Token(Token.SEMICOLON, this.ch);
        break;
      case '(':
        tok = new Token(Token.LPAREN, this.ch);
        break;
      case ')':
        tok = new Token(Token.RPAREN, this.ch);
        break;
      case ',':
        tok = new Token(Token.COMMA, this.ch);
        break;
      case '+':
        tok = new Token(Token.PLUS, this.ch);
        break;
      case '{':
        tok = new Token(Token.LBRACE, this.ch);
        break;
      case '}':
        tok = new Token(Token.RBRACE, this.ch);
        break;
      case 0:
        tok = new Token(Token.EOF, '\0');
        break;
    }

    this.readChar();
    return tok;
  }
}
