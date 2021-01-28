import { useL10n } from './L10nContext';

const Content = () => {
  const { t } = useL10n();

  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <title>{t('title')}</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#fafafa" />
        <link rel="apple-touch-icon" sizes="138x138" href="/logo138.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon.png" />
        <meta name="description" content={t('metaDescription')} />
        <meta name="keywords" content={t('metaKeywords')} />

        <meta property="og:title" content={t('og:title')} />
        <meta
          property="og:description"
          content={t('og:description')}
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://warsaw.flatstack.com/" />
        <meta
          property="og:image"
          content="https://warsaw.flatstack.com/logo500.png"
        />
      </head>
      <body>
        <p>{t('welcome')}</p>
      </body>
    </html>
  );
};

export default Content;
