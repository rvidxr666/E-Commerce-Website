


const EditProfile = () => {

    return (
        <div class="container rounded bg-white mt-2 mb-5">
        <div class="row">
        <div class="col-md-3 border-right"></div>
        <div class="col-md-5 border-right">
            <div class="p-3 py-5">
                <div class="d-flex justify-content-between align-items-center mb-3">
                    <h4 class="text-right">Edit Profile</h4>
                </div>
                <form className="form-container" method="POST">
                <div class="row mt-2">
                    <div class="col-md-6"><label class="labels">Name</label><input type="text" class="form-control" placeholder="first name"/></div>
                    <div class="col-md-6"><label class="labels">Surname</label><input type="text" class="form-control" value="" placeholder="surname" /></div>
                </div>
                <div class="row mt-3">
                    <div class="col-md-6"><label class="labels">Email</label><input type="email" class="form-control" placeholder="enter new email"/></div>
                    <div class="col-md-6"><label class="labels">Birth Date</label><input type="date" class="form-control" placeholder="date" value="" /></div>
                </div>
                <div class="row mt-3">
                    <div class="col-md-6"><label class="labels">Balance</label><input type="number" class="form-control" placeholder="enter balance"/></div>
                </div>
                <div class="mt-5 text-center"><button class="btn btn-primary profile-button" type="button">Save Profile</button></div>
                </form>
            </div>
        </div>
    </div>
</div>
    )
}


export default EditProfile;