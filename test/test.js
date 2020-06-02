const expect = require('chai').expect
const platzom = require('..').default

describe('#platzom', () => {
  it('If the word ends with "AR" those characters are removed', () => {
    const translation = platzom('Programar')
    expect(translation).to.equal('Program')
  })

  it('If the word starts with Z a "pe" is added at the end', () => {
    const translation = platzom('Zorro')
    const translation2 = platzom('Zarpar')
    expect(translation).to.equal('Zorrope')
    expect(translation2).to.equal('Zarppe')
  })

  it('If the word have 10 or more characters it must be splitted and joined by "-"', () => {
    const translation = platzom('abecedario')
    expect(translation).to.equal('abece-dario')
  })

  it('If the word is a palindrome, none of the above rule is counted and the same word is returned interspersing upper and lower cases', () => {
    const translation = platzom('sometemos')
    expect(translation).to.equal('SoMeTeMoS')
  })
})
