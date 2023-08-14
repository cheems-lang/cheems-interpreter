/*Define TokenType as a readable representation for different parts of the Cheems programming language*/
export const TokenType = {
    ILLEGAL: 'ILLEGAL', // illegal characters not part of the language
    EOF: 'EOF', // end of file

    // Identifiers + literals
    IDENT: 'IDENT', // add, foobar, x, y, ...
    NUMBER: 'NUMBER', // 216755

    // Operators
    ASSIGN: '=', // assignment operator
    PLUS: '+', // addition operator
    MINUS: '-', // substraction operator
    BANG: '!', // logical not operator
    ASTERISK: '*', // multiplication operator
    SLASH: '/', // division operator

    LT: '<', // less than operator
    GT: '>', // greater than operator

    // Delimiters
    COMMA: ',', // comma delimiter
    SEMICOLON: ';', // semicolon delimiter

    LPAREN: '(', // left parenthesis
    RPAREN: ')', // right parenthesis
    LBRACE: '{', // left brace
    RBRACE: '}', // right brace

    // Keywords
    FUNCTION: 'FUNCTION', // function keyword
    LET: 'LET', // let keyword for variable declaration
    TRUE: 'TRUE', // boolean true keyword
    FALSE: 'FALSE', // boolean false keyword
    IF: 'IF', // if keyword for conditional statement
    ELSE: 'ELSE', // else keyword fot conditional statement
    RETURN: 'RETURN', // return keyword for function return
};

// Define Token interface to give structure to tokens within the language
export interface Token {
    type: string; // the type of token following the TokenType
    literal: string; // the literal value the token represents
}

// Map keywords of the language to their TokenType representations for easy look-up and translation
export const keywords = new Map<string, string>([
    ['fn', TokenType.FUNCTION],
    ['let', TokenType.LET],
    ['true', TokenType.TRUE],
    ['false', TokenType.FALSE],
    ['if', TokenType.IF],
    ['else', TokenType.ELSE],
    ['return', TokenType.RETURN],
]);

/**
 * Function to look up an identifier and return the corresponding keyword if it exists, otherwise return it as a general identifier
 */
export function lookUpIdent(ident: string): string {
    if (keywords.has(ident)) { // if the identifier exists in the keywords mao
        return keywords.get(ident)!; // return the keyword
    }

    return TokenType.IDENT; // if the identifier doesn't exist as a keyword, return it as an identifier token type
}
