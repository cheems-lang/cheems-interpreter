import java.io.Console;

public class Cheems {
  public static void main(String[] args) {
    Console console = System.console();

    if (console == null) {
      System.out.println("No console available");
      return;
    }

    while (true) {
      String input = console.readLine(">>> ");
      System.out.println(input);
    }
  }
}
