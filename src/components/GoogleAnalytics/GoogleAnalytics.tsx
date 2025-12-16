'use client'

import Script from 'next/script'
import { useEffect, useState } from 'react'
import CookieConsent, { getCookieConsentValue } from 'react-cookie-consent'

const GA_MEASUREMENT_ID = 'G-CM2CSB458N'

export const GoogleAnalytics = () => {
  const [hasConsent, setHasConsent] = useState(false)

  useEffect(() => {
    const consent = getCookieConsentValue('portfolio-cookie-consent')
    setHasConsent(consent === 'true')
  }, [])

  const handleAccept = () => {
    setHasConsent(true)
  }

  return (
    <>
      <CookieConsent
        location="bottom"
        buttonText="Accepter"
        declineButtonText="Refuser"
        cookieName="portfolio-cookie-consent"
        enableDeclineButton
        onAccept={handleAccept}
        style={{
          background: 'linear-gradient(135deg, #1a1a2e 0%, #16213e 100%)',
          borderTop: '1px solid rgba(112, 104, 250, 0.3)',
          padding: '1rem',
          alignItems: 'center'
        }}
        buttonStyle={{
          background: 'linear-gradient(43deg, #7068fa 0%, #ff64b4 46%, #ffd94a 100%)',
          color: '#fff',
          fontWeight: '600',
          borderRadius: '8px',
          padding: '0.6rem 1.2rem',
          fontSize: '0.85rem'
        }}
        declineButtonStyle={{
          background: 'transparent',
          color: '#fff',
          border: '1px solid rgba(255, 255, 255, 0.3)',
          fontWeight: '600',
          borderRadius: '8px',
          padding: '0.6rem 1.2rem',
          fontSize: '0.85rem'
        }}
        contentStyle={{
          flex: '1 0 300px',
          margin: '0'
        }}
      >
        Ce site utilise des cookies pour analyser le trafic et ameliorer votre
        experience.
      </CookieConsent>

      {hasConsent && (
        <>
          <Script
            src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
            strategy="afterInteractive"
          />
          <Script id="google-analytics" strategy="afterInteractive">
            {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${GA_MEASUREMENT_ID}');
            `}
          </Script>
        </>
      )}
    </>
  )
}
