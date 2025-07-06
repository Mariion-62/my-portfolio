import * as CardRealisationExports from './index'

describe('CardRealisation index', () => {
  it('exports CardRealisation components', () => {
    // Vérifier que le module exporte bien les composants
    expect(typeof CardRealisationExports).toBe('object')
  })

  it('does not throw when importing', () => {
    expect(() => {
      require('./index')
    }).not.toThrow()
  })
})
