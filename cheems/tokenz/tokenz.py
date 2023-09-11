from enum import Enum


class TokenType(Enum):
    ILLEGAL = "ILLEGAL"  # illegal characters not part of the language
    EOF = "EOF"  # end of file

    # Identifiers + literals
    IDENT = "IDENT"  # add foobar x y ...
    NUMBER = "NUMBER"  # 216755

    # Operators
    ASSIGN = "="  # assignment operator
    PLUS = "+"  # addition operator
    MINUS = "-"  # substraction operator
    BANG = "!"  # logical not operator
    ASTERISK = "*"  # multiplication operator
    SLASH = "/"  # division operator

    LT = "<"  # less than operator
    GT = ">"  # greater than operator

    # Delimiters
    COMMA = ","  # comma delimiter
    SEMICOLON = ";"  # semicolon delimiter

    LPAREN = "("  # left parenthesis
    RPAREN = ")"  # right parenthesis
    LBRACE = "{"  # left brace
    RBRACE = "}"  # right brace

    # Keywords
    FUNCTION = "FUNCTION"  # function keyword
    LET = "LET"  # let keyword for variable declaration
    TRUE = "TRUE"  # boolean true keyword
    FALSE = "FALSE"  # boolean false keyword
    IF = "IF"  # if keyword for conditional statement
    ELSE = "ELSE"  # else keyword fot conditional statement
    RETURN = "RETURN"  # return keyword for function return


class Token:
    def __init__(self, token_type: TokenType, literal: str) -> None:
        self.token_type = token_type
        self.literal = literal


keywords = {
    "fn": TokenType.FUNCTION,
    "let": TokenType.LET,
    "true": TokenType.TRUE,
    "false": TokenType.FALSE,
    "if": TokenType.IF,
    "else": TokenType.ELSE,
}


def look_up_indent(ident: str) -> str:
    if ident in keywords:
        return keywords[ident]

    return TokenType.IDENT
