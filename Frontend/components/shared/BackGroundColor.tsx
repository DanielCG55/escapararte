export const BackGroundColor: React.FC<{ children: any; bg_color: string }> = ({
    children,
    bg_color,
}) => {
    return <div className={bg_color}>{children}</div>;
};
