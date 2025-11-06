import React from "react";

type Props = {
  children: React.ReactNode;
  rootMargin?: string;
  once?: boolean;
  className?: string;
};

const LazySection: React.FC<Props> = ({ children, rootMargin = "200px", once = true, className }) => {
  const ref = React.useRef<HTMLDivElement | null>(null);
  const [visible, setVisible] = React.useState(false);

  React.useEffect(() => {
    if (visible && once) return; // already mounted
    const node = ref.current;
    if (!node) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible(true);
            if (once) observer.disconnect();
          }
        });
      },
      { root: null, rootMargin, threshold: 0.01 }
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, [rootMargin, once, visible]);

  return <div ref={ref} className={className}>{visible ? children : null}</div>;
};

export default LazySection;