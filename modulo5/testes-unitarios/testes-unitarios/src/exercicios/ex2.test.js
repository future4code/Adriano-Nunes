import { checaPalindromo } from "./ex2";

describe("Checa Palíndromo", () => {
  it("retorna true para 'mirim'", () => {
    const ehPalindromo = checaPalindromo("mirim");
    expect(ehPalindromo).toEqual(true);
  });

  it ("retorna true para 'arara'", () => {
    const ehPalindromo = checaPalindromo("arara");
    expect(ehPalindromo).toEqual(true);
  })

  it ("retorna true para 'ovo'", () => {
    const ehPalindromo = checaPalindromo("ovo");
    expect(ehPalindromo).toEqual(true);
  })

  it ("retorna true para 'acaba'", () => {
    const ehPalindromo = checaPalindromo("acaba");
    expect(ehPalindromo).toEqual(false);
  })
});
