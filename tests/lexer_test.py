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
