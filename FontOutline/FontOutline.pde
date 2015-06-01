/* OpenProcessing Tweak of *@*http://www.openprocessing.org/sketch/30780*@* */
/* !do not delete the line above, required for linking your tweak if you upload again */
// Straightforward font outlines with Bezier curves.
// Nenad Trajkovic, July 2011.

// Math used from http://fontforge.sourceforge.net/bezier.html
// Any quadratic spline can be expressed as a cubic (where the
// cubic term is zero). The end points of the cubic will be the
// same as the quadratic's.
//   CP0 = QP0
//   CP3 = QP2
// The two control points for the cubic are:
//   CP1 = QP0 + 2/3 *(QP1-QP0)
//   CP2 = CP1 + 1/3 *(QP2-QP0)
// There is a slight error introduced due to rounding, but it
// is unlikely to be noticeable.

import java.awt.Graphics2D;
import java.awt.Font;
import java.awt.font.FontRenderContext;
import java.awt.font.GlyphVector;
import java.awt.Shape;
import java.awt.geom.PathIterator;

float x0, y0;
int pointSize = 10;
int controlPointSize = 5;
PathIterator iterator;
String someText = "a";
String fontName = "AdobeDevanagari-Regular";

void setup() {
  size(1500 , 1000);
  background(255);
  stroke(0);
  smooth();
  noLoop();
  fill(0);

  x0 = 250;
  y0 = 600;

  // Java font for outline rendering
  Graphics2D g2d = ((PGraphicsJava2D)g).g2;
  FontRenderContext frc = g2d.getFontRenderContext();
  Font font = new Font(fontName, Font.PLAIN, 500);
  GlyphVector gv = font.createGlyphVector(frc, someText);
  Shape glyph = gv.getOutline(x0, y0);
  iterator = glyph.getPathIterator(null);

  // Processing font for comparison
  PFont fontP = createFont(fontName, 150);
  textFont(fontP);
  text(someText, x0, 1.35*y0);

  // Display font name in upper right corner
  textSize(20);
  textAlign(LEFT);
  text(fontName, 30, 60);
}

void draw() {

  float xStart, yStart; // Segment start
  float x, y, x1, y1; // Current and end points
  float xc1, yc1, xc2, yc2; // Cubic control points
  float xc, yc; // Quadratic control point

  x = xStart = x0;
  y = yStart = y0;

  // Draw outline using PathIterator
  while (!iterator.isDone()) {
    float[] coordinates = new float[6];
    int segType = iterator.currentSegment(coordinates);
    switch (segType) {
      case PathIterator.SEG_MOVETO: // This is where the shape begins
        println("move to " + coordinates[0] + ", " + coordinates[1]);
        x = coordinates[0];
        y = coordinates[1];
        fill(0,0,255);
        ellipse(x, y, pointSize, pointSize); // Visualize the point
        xStart = x;
        yStart = y;
        break;
      case PathIterator.SEG_LINETO: // This is a line
        println("line to " + coordinates[0] + ", " + coordinates[1]);
        x1 = coordinates[0];
        y1 = coordinates[1];
        line(x, y, x1, y1);
        fill(0);
        ellipse(x1, y1, pointSize, pointSize); // Visualize the point
        x = x1;
        y = y1;
        break;
      case PathIterator.SEG_QUADTO: // This is a quadratic bezier
        println("quadratic to " + coordinates[0] + ", " + coordinates[1] +
                           ", " + coordinates[2] + ", " + coordinates[3]);
        xc = coordinates[0];
        yc = coordinates[1];
        x1 = coordinates[2];
        y1 = coordinates[3];
        xc1 = x + 2.0 * (xc - x) / 3.0;  // x + (2.0/3.0) * (xc - x)
        yc1 = y + 2.0 * (yc - y) / 3.0;  // y + (2.0/3.0) * (yc - y)
        xc2 = xc1 + (x1 - x) / 3.0;    // xc1 + (1.0/3.0) * (x1 - x)
        yc2 = yc1 + (y1 - y) / 3.0;    // yc1 + (1.0/3.0) * (y1 - y)
        noFill(); bezier(x, y, xc1, yc1, xc2, yc2, x1, y1); fill(0);
        ellipse(x1, y1, controlPointSize, controlPointSize); // Visualize the point
        x = x1;
        y = y1;
        break;
      case PathIterator.SEG_CUBICTO: // This is a cubic bezier
        println("cubic to " + coordinates[0] + ", " + coordinates[1] + ", "
                            + coordinates[2] + ", " + coordinates[3] + ", "
                            + coordinates[4] + ", " + coordinates[5]);
        xc1 = coordinates[0];
        yc1 = coordinates[1];
        xc2 = coordinates[2];
        yc2 = coordinates[3];
        x1  = coordinates[4];
        y1  = coordinates[5];
        noFill(); bezier(x, y, xc1, yc1, xc2, yc2, x1, y1); fill(0);
        ellipse(x1, y1, pointSize, pointSize); // Visualize the point
        fill(255,0,0);
        ellipse(xc1, yc1, controlPointSize, controlPointSize); // Visualize the point
        ellipse(xc2, yc2, controlPointSize, controlPointSize); // Visualize the point
        x = x1;
        y = y1;
        break;
      case PathIterator.SEG_CLOSE: // This is the end of the shape
        println("close");
        line(x, y, xStart, yStart);
        fill(0,255,0);
        ellipse(x, y, pointSize, pointSize); // Visualize the point
        break;
      default:
        break;
    } // switch
    iterator.next();
  } // while
}

