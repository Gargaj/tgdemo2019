/*

Eksempel på bruk:

    var pointArray = new PointAtMeshVertices(sphere).getPoints();
    for ( var i = 0; i < pointArray.length; i ++ ) {
        scene.add(pointArray[i]);
    }

 */


function PointAtMeshVertices (mesh) {
    this.mesh = mesh;


    this.getPoints = function() {
        var positions = this.mesh.geometry.attributes.position;
        var count = positions.count;
        var dotArray = [];

        for ( var i = 0; i < count; i ++ ) {

            var px = positions.getX( i );
            var py = positions.getY( i );
            var pz = positions.getZ( i );

        }

        return positions;
    };
}