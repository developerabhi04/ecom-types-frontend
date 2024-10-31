
const Loader = () => {
    return (
        <section className="loader">
            <div></div>
        </section>

        // <div>....</div>
    )
}

export default Loader;


interface SkeletonProps {
    width?: string;
    length?: number;
}

export const SkeletonLoader = ({ width = "unset", length = 3 }: SkeletonProps) => {

    const skeletons = Array.from({ length }, (_, idx) => (
        <div key={idx} className="skeleton-shape"></div>
    ));

    return (
        <div className="skeleton-loader" style={{ width }}>
            {skeletons}
        </div>
    )
}