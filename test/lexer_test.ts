import { Token, TokenType } from '../src/token/token.ts'
import { Lexer } from '../src/lexer/lexer.ts'

import { assertEquals } from 'https://deno.land/std@0.191.0/testing/asserts.ts'

Deno.test('test basic tokens', () => {
  const input = '=+(){},;'
  const tests: { type: string, literal: string }[] = [
    { type: '=', literal: TokenType.ASSIGN },
    { type: '+', literal: TokenType.PLUS },
    { type: '(', literal: TokenType.LPAREN },
    { type: ')', literal: TokenType.RPAREN },
    { type: '{', literal: TokenType.LBRACE },
    { type: '}', literal: TokenType.RBRACE },
    { type: ',', literal: TokenType.COMMA },
    { type: ';', literal: TokenType.SEMICOLON },
    { type: 'EOF', literal: TokenType.EOF }
  ]

  const l = new Lexer(input)

  for (const tt of tests) {
    const tok: Token = l.nextToken()
    console.info(tok)
    assertEquals(tok.type, tt.type)
    assertEquals(tok.literal, tt.literal)
  }
})

Deno.test('test identifiers', () => {
  const input = `let five = 5;
  let ten = 10;
  
  let add = fn(x, y) {
    x + y;
  };
  
  let result = add(five, ten);
  !-/*5;
  5 < 10 > 5;

  if (5 < 10) {
    return true;
  } else {
    return false;
  }
  `

  const tests: Token[] = [
    { type: TokenType.LET, literal: 'let' },
    { type: TokenType.IDENT, literal: 'five' },
    { type: TokenType.ASSIGN, literal: '=' },
    { type: TokenType.NUMBER, literal: '5' },
    { type: TokenType.SEMICOLON, literal: ';' },
    { type: TokenType.LET, literal: 'let' },
    { type: TokenType.IDENT, literal: 'ten' },
    { type: TokenType.ASSIGN, literal: '=' },
    { type: TokenType.NUMBER, literal: '10' },
    { type: TokenType.SEMICOLON, literal: ';' },
    { type: TokenType.LET, literal: 'let' },
    { type: TokenType.IDENT, literal: 'add' },
    { type: TokenType.ASSIGN, literal: '=' },
    { type: TokenType.FUNCTION, literal: 'fn' },
    { type: TokenType.LPAREN, literal: '(' },
    { type: TokenType.IDENT, literal: 'x' },
    { type: TokenType.COMMA, literal: ',' },
    { type: TokenType.IDENT, literal: 'y' },
    { type: TokenType.RPAREN, literal: ')' },
    { type: TokenType.LBRACE, literal: '{' },
    { type: TokenType.IDENT, literal: 'x' },
    { type: TokenType.PLUS, literal: '+' },
    { type: TokenType.IDENT, literal: 'y' },
    { type: TokenType.SEMICOLON, literal: ';' },
    { type: TokenType.RBRACE, literal: '}' },
    { type: TokenType.SEMICOLON, literal: ';' },
    { type: TokenType.LET, literal: 'let' },
    { type: TokenType.IDENT, literal: 'result' },
    { type: TokenType.ASSIGN, literal: '=' },
    { type: TokenType.IDENT, literal: 'add' },
    { type: TokenType.LPAREN, literal: '(' },
    { type: TokenType.IDENT, literal: 'five' },
    { type: TokenType.COMMA, literal: ',' },
    { type: TokenType.IDENT, literal: 'ten' },
    { type: TokenType.RPAREN, literal: ')' },
    { type: TokenType.SEMICOLON, literal: ';' },
    { type: TokenType.BANG, literal: '!' },
    { type: TokenType.MINUS, literal: '-' },
    { type: TokenType.SLASH, literal: '/' },
    { type: TokenType.ASTERISK, literal: '*' },
    { type: TokenType.NUMBER, literal: '5' },
    { type: TokenType.SEMICOLON, literal: ';' },
    { type: TokenType.NUMBER, literal: '5' },
    { type: TokenType.LT, literal: '<' },
    { type: TokenType.NUMBER, literal: '10' },
    { type: TokenType.GT, literal: '>' },
    { type: TokenType.NUMBER, literal: '5' },
    { type: TokenType.SEMICOLON, literal: ';' },
    { type: TokenType.IF, literal: 'if' },
    { type: TokenType.LPAREN, literal: '(' },
    { type: TokenType.NUMBER, literal: '5' },
    { type: TokenType.LT, literal: '<' },
    { type: TokenType.NUMBER, literal: '10' },
    { type: TokenType.RPAREN, literal: ')' },
    { type: TokenType.LBRACE, literal: '{' },
    { type: TokenType.RETURN, literal: 'return' },
    { type: TokenType.TRUE, literal: 'true' },
    { type: TokenType.SEMICOLON, literal: ';' },
    { type: TokenType.RBRACE, literal: '}' },
    { type: TokenType.ELSE, literal: 'else' },
    { type: TokenType.LBRACE, literal: '{' },
    { type: TokenType.RETURN, literal: 'return' },
    { type: TokenType.FALSE, literal: 'false' },
    { type: TokenType.SEMICOLON, literal: ';' },
    { type: TokenType.RBRACE, literal: '}' },
    { type: TokenType.EOF, literal: 'EOF' },
  ]

  const l = new Lexer(input)

  for (const tt of tests) {
    const tok: Token = l.nextToken()
    console.info(tok)
    assertEquals(tok.type, tt.type, 'wrong token type')
    assertEquals(tok.literal, tt.literal, 'wrong token literal')
  }
})