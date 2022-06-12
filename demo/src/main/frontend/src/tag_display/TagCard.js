import React from 'react'

const TagCard = () => {

    const TAG_IMG = "https://static.vecteezy.com/system/resources/previews/002/754/785/non_2x/hashtag-icon-template-design-illustration-free-vector.jpg"
    // const TAG_IMG = "https://media.istockphoto.com/vectors/hand-drawn-brush-stroke-dirty-art-hashtag-symbol-icon-sign-isolated-vector-id1221231487?b=1&k=20&m=1221231487&s=612x612&w=0&h=GvQwrm0B92pM8gghlmoGjQT0wMXUEUQ69sZ7j0oSoVQ="

    return (
        <div className="col-md-12 grid-margin">
        <div className="card rounded">
            <div className="card-body">
                <div style={{
                    display: "flex",
                    alignItems: "center",
                    paddingBottom: "15px"
                }}>
                    <img className="img-xs rounded-circle" src={TAG_IMG} alt="" />
                </div>
            </div>
        </div>
        </div>
    )
}

export default TagCard