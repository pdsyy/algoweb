import React from 'react';
import { Helmet } from 'react-helmet';

const SEO = ({ title, description, keywords, image }) => {
    const siteName = "ALGO Trading";

    const defaultDescription = "Автоматизированный трейдинг для каждого.";

    return (
        <Helmet>

            <title>{title ? `${title} | ${siteName}` : siteName}</title>
            <meta name="description" content={description || defaultDescription} />
            {keywords && <meta name="keywords" content={keywords} />}

            <meta property="og:type" content="website" />
            <meta property="og:title" content={title || siteName} />
            <meta property="og:description" content={description || defaultDescription} />
            {image && <meta property="og:image" content={image} />}

            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:title" content={title || siteName} />
            <meta name="twitter:description" content={description || defaultDescription} />

            <link rel="icon" href="/favicon.png" />
        </Helmet>
    );
};

export default SEO;