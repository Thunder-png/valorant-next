import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

const Breadcrumb = () => {
    const router = useRouter();
    const paths = router.asPath.split("/").slice(1);

    return (
        <nav aria-label="breadcrumb">
            <ol className="breadcrumb small" itemscope="" itemtype="https://schema.org/BreadcrumbList">
                <li itemprop="itemListElement" itemscope="" itemtype="https://schema.org/ListItem" className="breadcrumb-item">
                    <Link href="/" itemprop="item" title="Ana Sayfa"><span itemprop="name">Ana Sayfa</span></Link>
                    <meta itemprop="position" content="1" />
                </li>
                {paths.map((path, index) => {
                    const routePath = `/${paths.slice(0, index + 1).join('/')}`;
                    const isLast = index === paths.length - 1;
                    const position = index + 2;
                    return (
                        <li key={routePath} itemprop="itemListElement" itemscope="" itemtype="https://schema.org/ListItem" className={isLast ? "breadcrumb-item active text-capitalize" : "breadcrumb-item"}>
                            <Link href={isLast ? router.asPath : routePath} itemprop="item"><span itemprop="name">{decodeURIComponent(path)}</span></Link>
                            <meta itemprop="position" content={position} />
                        </li>
                    );
                })}
            </ol>
        </nav>
    );
}

export default Breadcrumb;

