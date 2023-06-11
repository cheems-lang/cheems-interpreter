import { Token, TokenType } from '../token/token.ts';
import { Lexer } from './lexer.ts';

import { assertEquals } from 'https://deno.land/std@0.191.0/testing/asserts.ts';

Deno.test('lexer test', () => {
  const input = '=+(){},;';
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
  ];

  const l = new Lexer(input);

  for (const tt of tests) {
    const tok: Token = l.nextToken();
    console.log(tok);
    assertEquals(tok.type, tt.type);
    assertEquals(tok.literal, tt.literal);
  }
});