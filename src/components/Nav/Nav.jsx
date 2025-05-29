

export const Nav = ({children, flexDirection, gap ,width,height,position,margin, top}) => {
    return (
        <nav style={{
            position: position,
            top: top,
            margin: margin
        }}>
          <ul style={{
            display: 'flex',
             flexDirection: flexDirection,
             gap:gap,
             width: width,
             height:height,
             }}>
                {children}
            </ul>
        </nav>
    );
}