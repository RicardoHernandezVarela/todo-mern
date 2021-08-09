function TodoForm() {
    return (
        <div className="row">
            <form className="col s12">
                <div className="row">
                    <div className="input-field col s6">
                        <i className="material-icons prefix">account_circle</i>
                        <input id="icon_prefix" type="text" className="validate" name="title" />
                        <label htmlFor="icon_prefix">Title</label>
                    </div>

                    <div className="input-field col s6">
                        <i className="material-icons prefix">phone</i>
                        <input id="icon_telephone" type="tel" className="validate" name="content" />
                        <label htmlFor="icon_telephone">Content</label>
                    </div>
                </div>
            </form>
        </div>
    );
}

export default TodoForm;
