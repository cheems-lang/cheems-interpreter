from tokenz.tokenz import TokenType, Token
from lexer.lexer import Lexer


def main():
    mytoken = Token(TokenType.ASSIGN, "asas")
    mylexer = Lexer("sdsd")
    print(mytoken.literal)
    print(mylexer.nn)


if __name__ == "__main__":
    main()
