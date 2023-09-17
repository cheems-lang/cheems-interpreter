import sys

sys.path.append("./cheems")

from tokenz.tokenz import Token, TokenType
from lexer.lexer import Lexer


def test_basic_tokens():
    source = "=+(){},;"
    tests = []

    # define tests
    tests.append({"token_type": TokenType.ASSIGN, "literal": "="})
    tests.append({"token_type": TokenType.PLUS, "literal": "+"})
    tests.append({"token_type": TokenType.LPAREN, "literal": "("})
    tests.append({"token_type": TokenType.RPAREN, "literal": ")"})
    tests.append({"token_type": TokenType.LBRACE, "literal": "{"})
    tests.append({"token_type": TokenType.RBRACE, "literal": "}"})
    tests.append({"token_type": TokenType.COMMA, "literal": ","})
    tests.append({"token_type": TokenType.SEMICOLON, "literal": ";"})
    tests.append({"token_type": TokenType.EOF, "literal": 0})

    l = Lexer(source)

    for tt in tests:
        tok = l.next_token()
        assert tok.token_type == tt.get("token_type")


def test_identifiers():
    source = """
    let five = 5;
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
    """
    tests = []

    # define tests
    tests.append({"token_type": TokenType.LET, "literal": "let"})
    tests.append({"token_type": TokenType.IDENT, "literal": "five"})
    tests.append({"token_type": TokenType.ASSIGN, "literal": "="})
    tests.append({"token_type": TokenType.NUMBER, "literal": "5"})
    tests.append({"token_type": TokenType.SEMICOLON, "literal": ";"})
    tests.append({"token_type": TokenType.LET, "literal": "let"})
    tests.append({"token_type": TokenType.IDENT, "literal": "ten"})
    tests.append({"token_type": TokenType.ASSIGN, "literal": "="})
    tests.append({"token_type": TokenType.NUMBER, "literal": "10"})
    tests.append({"token_type": TokenType.SEMICOLON, "literal": ";"})
    tests.append({"token_type": TokenType.LET, "literal": "let"})
    tests.append({"token_type": TokenType.IDENT, "literal": "add"})
    tests.append({"token_type": TokenType.ASSIGN, "literal": "="})
    tests.append({"token_type": TokenType.FUNCTION, "literal": "fn"})
    tests.append({"token_type": TokenType.LPAREN, "literal": "("})
    tests.append({"token_type": TokenType.IDENT, "literal": "x"})
    tests.append({"token_type": TokenType.COMMA, "literal": ","})
    tests.append({"token_type": TokenType.IDENT, "literal": "y"})
    tests.append({"token_type": TokenType.RPAREN, "literal": ")"})
    tests.append({"token_type": TokenType.LBRACE, "literal": "{"})
    tests.append({"token_type": TokenType.IDENT, "literal": "x"})
    tests.append({"token_type": TokenType.PLUS, "literal": "+"})
    tests.append({"token_type": TokenType.IDENT, "literal": "y"})
    tests.append({"token_type": TokenType.SEMICOLON, "literal": ";"})
    tests.append({"token_type": TokenType.RBRACE, "literal": "}"})
    tests.append({"token_type": TokenType.SEMICOLON, "literal": ";"})
    tests.append({"token_type": TokenType.LET, "literal": "let"})
    tests.append({"token_type": TokenType.IDENT, "literal": "result"})
    tests.append({"token_type": TokenType.ASSIGN, "literal": "="})
    tests.append({"token_type": TokenType.IDENT, "literal": "add"})
    tests.append({"token_type": TokenType.LPAREN, "literal": "("})
    tests.append({"token_type": TokenType.IDENT, "literal": "five"})
    tests.append({"token_type": TokenType.COMMA, "literal": ","})
    tests.append({"token_type": TokenType.IDENT, "literal": "ten"})
    tests.append({"token_type": TokenType.RPAREN, "literal": ")"})
    tests.append({"token_type": TokenType.SEMICOLON, "literal": ";"})
    tests.append({"token_type": TokenType.BANG, "literal": "!"})
    tests.append({"token_type": TokenType.MINUS, "literal": "-"})
    tests.append({"token_type": TokenType.SLASH, "literal": "/"})
    tests.append({"token_type": TokenType.ASTERISK, "literal": "*"})
    tests.append({"token_type": TokenType.NUMBER, "literal": "5"})
    tests.append({"token_type": TokenType.SEMICOLON, "literal": ";"})
    tests.append({"token_type": TokenType.NUMBER, "literal": "5"})
    tests.append({"token_type": TokenType.LT, "literal": "<"})
    tests.append({"token_type": TokenType.NUMBER, "literal": "10"})
    tests.append({"token_type": TokenType.GT, "literal": ">"})
    tests.append({"token_type": TokenType.NUMBER, "literal": "5"})
    tests.append({"token_type": TokenType.SEMICOLON, "literal": ";"})
    tests.append({"token_type": TokenType.IF, "literal": "if"})
    tests.append({"token_type": TokenType.LPAREN, "literal": "("})
    tests.append({"token_type": TokenType.NUMBER, "literal": "5"})
    tests.append({"token_type": TokenType.LT, "literal": "<"})
    tests.append({"token_type": TokenType.NUMBER, "literal": "10"})
    tests.append({"token_type": TokenType.RPAREN, "literal": ")"})
    tests.append({"token_type": TokenType.LBRACE, "literal": "{"})
    tests.append({"token_type": TokenType.RETURN, "literal": "return"})
    tests.append({"token_type": TokenType.TRUE, "literal": "true"})
    tests.append({"token_type": TokenType.SEMICOLON, "literal": ";"})
    tests.append({"token_type": TokenType.RBRACE, "literal": "}"})
    tests.append({"token_type": TokenType.ELSE, "literal": "else"})
    tests.append({"token_type": TokenType.LBRACE, "literal": "{"})
    tests.append({"token_type": TokenType.RETURN, "literal": "return"})
    tests.append({"token_type": TokenType.FALSE, "literal": "false"})
    tests.append({"token_type": TokenType.SEMICOLON, "literal": ";"})
    tests.append({"token_type": TokenType.RBRACE, "literal": "}"})
    tests.append({"token_type": TokenType.EOF, "literal": 0})

    l = Lexer(source)

    for tt in tests:
        tok = l.next_token()
        print([tt, tok.token_type, tok.literal])
        assert tok.literal == tt.get("literal")
        assert tok.token_type == tt.get("token_type")
