import sys

sys.path.append("./cheems")

from tokenz.tokenz import TokenType, Token, look_up_indent


class Lexer:
    source: str
    position = 0
    read_position = 0
    ch: str

    def __init__(self, source: str, position: int, read_position: int, ch: str):
        self.source = source
        self.position = position

    def next_token():
        pass
