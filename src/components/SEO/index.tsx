import Head from 'next/head'

interface SEOProps {
  keywords?: string
}

function SEO({ keywords }: SEOProps) {
  return (
    <Head>
      <title>Hewerton Adão</title>
      <link rel="canocical" href="https://www.hewerton-adao.de" />
      <meta name="language" content="pt-BR" />
      <meta name="description" content="Portifólio" />
      <meta name="author" content="Hewerton Adão" />
      {keywords && <meta name="keywords" content={keywords} />}
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://www.hewerton-adao.dev" />
      <meta property="og:title" content="Hewerton Adão" />
      <meta property="og:image" content="/images/hewerton adao.jpg" />
      {/* Google tag (gtag.js)  */}
      <script async src="https://www.googletagmanager.com/gtag/js?id=G-BMG8JG77GJ" />
      <script
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'G-BMG8JG77GJ');
        `,
        }}
      />
    </Head>
  )
}

export default SEO
