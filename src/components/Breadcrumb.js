import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

const Breadcrumb = () => {
    const router = useRouter();
    const paths = router.asPath.split("/").slice(1);

    return (
        <div className="breadcrumb">
            <Link href="/">Ana Sayfa</Link>
            {paths.map((path, index) => {
                const routePath = `/${paths.slice(0, index + 1).join('/')}`;
                const isLast = index === paths.length - 1;
                return (
                    <span key={routePath}>
                        {" > "}
                        <Link href={isLast ? router.asPath : routePath}>{decodeURIComponent(path)}</Link>
                    </span>
                );
            })}
        </div>
    );
}

export default Breadcrumb;
