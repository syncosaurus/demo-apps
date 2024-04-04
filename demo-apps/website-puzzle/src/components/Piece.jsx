const Piece = ({ shape }) => {
  const { id, x, y, fill } = shape

  return (
    <div
      className={"rectangle"}
      style={{
        transform: `translate(${x}px, ${y}px)`,
        backgroundColor: fill || "#CCC",
        borderColor: "charcoal",
        color: "charcoal",
        boxShadow: "8px 9px 14px 0px rgba(0,0,0,0.37)",
        borderRadius: 10,
        padding: "5px",
      }}
    >
      {id}
    </div>
  )
}

export default Piece
