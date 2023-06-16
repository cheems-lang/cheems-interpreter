import { Token, TokenType } from '../src/token/token.ts'
import { Lexer } from '../src/lexer/lexer.ts'

import { assertEquals } from 'https://deno.land/std@0.191.0/testing/asserts.ts'

Deno.test('test basic tokens', () => {
  const input = '=+(){},;'
  const tests: {type: string, literal: string}[] = [
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
    console.log(tok)
    assertEquals(tok.type, tt.type)
    assertEquals(tok.literal, tt.literal)
  }
})

Deno.test('test identifiers', () => {
  const input = `let five = 5;
  let ten = 10;
  
  let add = fn(x, y) {
    x + y;
  }`

  const tests: {type: string, literal: string}[] = [
    { type: 'let', literal: TokenType.LET },
    { type: 'five', literal: TokenType.IDENT },
    { type: '=', literal: TokenType.ASSIGN },
    { type: '5', literal: '5' },
    { type: ';', literal: TokenType.SEMICOLON }
  ]

  const l = new Lexer(input)

  for (const tt of tests) {
    const tok: Token = l.nextToken()
    console.log(tok)
    assertEquals(tok.type, tt.type)
    assertEquals(tok.literal, tt.literal)
  }
})