Task = {
    setID: function (ID) {
        this.id = ID
    },
    outputID: function () {
        console.log(this.id)
    }
}

XYZ = Object.create(Task)
XYZ.prepareTask = function (ID, Label) {
    this.setID(ID)
    this.label = Label
}
XYZ.outputTaskDetails = function () {
    this.outputID()
    console.log(this.label)
}

XYZ.setID(900)
XYZ.outputID()
XYZ.outputTaskDetails()

XYZ.prepareTask(100, 'weilin')
XYZ.outputTaskDetails()
XYZ.prepareTask(300, 'lz')
XYZ.outputTaskDetails()
let o1 = XYZ
o1.prepareTask(500, 'xyy')
o1.outputTaskDetails()
let o2 = XYZ
o2.prepareTask(800, 'hh')
o2.outputTaskDetails()
o1.outputTaskDetails()
