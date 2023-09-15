import sys

sys.path.append("./cheems")

from tokenz.tokenz import TokenType, Token, look_up_ident


class Lexer:
    source: str
    position = 0
    read_position = 0
    ch: str

    def __init__(self, source: str):
        self.source = source
        self.read_char()

    def read_char(self):
        if self.read_position >= len(self.source):
            self.ch = 0
        else:
            self.ch = self.source[self.read_position]
            self.read_position += 1

    def next_token(self):
        tok: Token

        self.skip_white_space()

        match self.ch:
            case "=":
                tok = Token(TokenType.ASSIGN, self.ch)
            case ";":
                tok = Token(TokenType.SEMICOLON, self.ch)
            case "(":
                tok = Token(TokenType.LPAREN, self.ch)
            case ")":
                tok = Token(TokenType.RPAREN, self.ch)
            case ",":
                tok = Token(TokenType.COMMA, self.ch)
            case "+":
                tok = Token(TokenType.PLUS, self.ch)
            case "-":
                tok = Token(TokenType.MINUS, self.ch)
            case "/":
                tok = Token(TokenType.SLASH, self.ch)
            case "*":
                tok = Token(TokenType.ASTERISK, self.ch)
            case "<":
                tok = Token(TokenType.LT, self.ch)
            case ">":
                tok = Token(TokenType.GT, self.ch)
            case "{":
                tok = Token(TokenType.LBRACE, self.ch)
            case "}":
                tok = Token(TokenType.RBRACE, self.ch)
            case 0:
                tok = Token(TokenType.EOF, self.ch)
            case _:
                if self.is_letter(self.ch):
                    return Token(look_up_ident(), self.read_identifier())
                elif self.is_digit(self.ch):
                    return Token(TokenType.NUMBER, self.read_number())
                else:
                    return Token(TokenType.ILLEGAL, self.read_identifier())

        self.read_char()
        return tok

    def read_identifier(self) -> str:
        identifier = []

        while self.is_letter(self.ch):
            identifier.append(self.ch)
            self.read_char()

        return "".join(identifier)

    def is_letter(self, ch: str) -> bool:
        return "a" <= ch and ch <= "z" or "A" <= ch and ch <= "Z" or ch == "_"

    def is_digit(self, ch: str) -> bool:
        return "0" <= ch and ch <= "9"

    def read_number(self) -> str:
        string_builder = []

        while self.is_digit(self.ch):
            string_builder.append(self.ch)
            self.read_char()

        return "".join(string_builder)

    def skip_white_space(self):
        while self.ch == " " or self.ch == "\t" or self.ch == "\n" or self.ch == "\r":
            self.read_char()
