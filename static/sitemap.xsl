<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="2.0"
                xmlns:html="http://www.w3.org/TR/REC-html40"
                xmlns:image="http://www.google.com/schemas/sitemap-image/1.1"
                xmlns:sitemap="http://www.sitemaps.org/schemas/sitemap/0.9"
                xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
    <xsl:output method="html" version="1.0" encoding="UTF-8" indent="yes"/>
    <xsl:template match="/">
        <html xmlns="http://www.w3.org/1999/xhtml">
            <head>
                <title>Sitemap XML | PubliusLogic</title>
                <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
                <link rel="shortcut icon" type="image/ico" href="https://publiuslogic.com/img/favicon.ico" />
                <link rel="sitemap" type="application/xml" title="Sitemap Index" href="/sitemap.xml" />
                <link rel="sitemap" type="application/xml" title="Sitemap Pages" href="/sitemap-pages.xml" />
                <link rel="sitemap" type="application/xml" title="Sitemap Posts" href="/sitemap-posts.xml" />
                <link rel="sitemap" type="application/xml" title="Sitemap Tags" href="/sitemap-tags.xml" />
                <link rel="sitemap" type="application/xml" title="Sitemap Categories" href="/sitemap-categories.xml" />
                <style type="text/css">
                    body {
                        background: #0f172a;
                        font-family: sans-serif;
                        font-size: 22px;
                        color: #cccccc;
                    }
                    a {
                        color: #8b5cf6;
                    }
                    a:hover {
                        color: #ffffff;
                    }
                    a:active {
                        color: #dedede;
                    }
                    table {
                        border: none;
                        border-collapse: collapse;
                        width: 100%
                    }
                    th {
                        text-align: left;
                        padding-right: 30px;
                        font-size: 24px;
                    }
                    thead th {
                        border-bottom: 1px solid #8b5cf6;
                        cursor: pointer;
                    }
                    td {
                        font-size: 22px;
                        padding: 5px;
                    }
                    tr:nth-child(odd) td {
                        background-color: rgb(216 196 196 / 4%);
                    }
                    tr:hover td {
                        background-color: #343434;
                        color: #ffffff;
                    }

                    #content {
                        margin: 0 auto;
                        padding: 2% 5%;
                        max-width: 80vw;
                        font-size: 18px;
                    }

                    .desc {
                        margin: 18px 3px;
                        line-height: 1.2em;
                    }
                    .back-link {
                        color: #ffffff;
                        font-size: 18px;
                    }
                </style>
            </head>
            <body>
                <div id="content">
                    <h1>PubliusLogic Sitemap's Index</h1>
                    <div className="desc">
                        Sitemap Index's of Pages, Posts, Tags and Categories
                        <div><a href="/" area-label="Back To Home Page" title="Back to Home Page">Back to Home Page</a></div>
                    </div>
                    <xsl:if test="count(sitemap:sitemapindex/sitemap:sitemap) &gt; 0">
                        <table id="sitemap" cellpadding="3">
                            <thead>
                                <tr>
                                    <th width="75%">Sitemap's</th>
                                    <th width="25%">Last Modified</th>
                                </tr>
                            </thead>
                            <tbody>
                            <xsl:for-each select="sitemap:sitemapindex/sitemap:sitemap">
                                <xsl:variable name="sitemapURL">
                                    <xsl:value-of select="sitemap:loc"/>
                                </xsl:variable>
                                <tr>
                                    <td>
                                        <a href="{$sitemapURL}"><xsl:value-of select="sitemap:loc"/></a>
                                    </td>
                                    <td>
                                        <xsl:value-of select="concat(substring(sitemap:lastmod,0,11),concat(' ', substring(sitemap:lastmod,12,5)))"/>
                                    </td>
                                </tr>
                            </xsl:for-each>
                            </tbody>
                        </table>
                    </xsl:if>
                    <xsl:if test="count(sitemap:sitemapindex/sitemap:sitemap) &lt; 1">
                        <p className="desc"><a href="sitemap.xml" className="back-link">&#8592; Back to index</a></p>
                        <table id="sitemap" cellpadding="3">
                            <thead>
                                <tr>
                                    <th width="70%">URL (<xsl:value-of select="count(sitemap:urlset/sitemap:url)"/> total)</th>
                                    <th width="15%">Images</th>
                                    <th title="Last Modification Time" width="15%">Last Modified</th>
                                </tr>
                            </thead>
                            <tbody>
                                <xsl:variable name="lower" select="'abcdefghijklmnopqrstuvwxyz'"/>
                                <xsl:variable name="upper" select="'ABCDEFGHIJKLMNOPQRSTUVWXYZ'"/>
                                <xsl:for-each select="sitemap:urlset/sitemap:url">
                                    <tr>
                                        <td>
                                            <xsl:variable name="itemURL">
                                                <xsl:value-of select="sitemap:loc"/>
                                            </xsl:variable>
                                            <a href="{$itemURL}">
                                                <xsl:value-of select="sitemap:loc"/>
                                            </a>
                                        </td>
                                        <td>
                                            <xsl:value-of select="count(image:image)"/>
                                        </td>
                                        <td>
                                            <xsl:value-of select="concat(substring(sitemap:lastmod,0,11),concat(' ', substring(sitemap:lastmod,12,5)))"/>
                                        </td>
                                    </tr>
                                </xsl:for-each>
                            </tbody>
                        </table>
                        <p className="desc"><a href="sitemap.xml" className="back-link">&#8592; Back to index</a></p>
                    </xsl:if>
                </div>
            </body>
        </html>

    </xsl:template>
</xsl:stylesheet>