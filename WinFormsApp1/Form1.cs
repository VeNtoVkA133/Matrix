namespace WinFormsApp1
{
    public partial class Form1 : Form
    {
        functions Obj = new functions();
        public Form1()
        {
            InitializeComponent();
        }

        private void button1_Click(object sender, EventArgs e)
        {

            label1.Text = "".ToString();

            int a1, a2, a3, a4, result;
            string sa1, sa2, sa3, sa4;

            sa1 = textBox1.Text;
            sa2 = textBox2.Text;
            sa3 = textBox3.Text;
            sa4 = textBox4.Text;
            a1 = Convert.ToInt32(textBox1.Text);
            a2 = Convert.ToInt32(textBox2.Text);
            a3 = Convert.ToInt32(textBox3.Text);
            a4 = Convert.ToInt32(textBox4.Text);

            Obj.checkNumber(a1, label3);
            Obj.checkNumber(a1, label3);
            Obj.checkNumber(a1, label3);
            Obj.checkNumber(a1, label3);



            

            result = (a1 * a4) - (a2 * a3);

            label1.Text = result.ToString();

        }

        private void button2_Click(object sender, EventArgs e)
        {

            label1.Text = "".ToString();

            int b1, b2, b3, b4, b5, b6, b7, b8, b9, result2;

            b1 = Convert.ToInt32(textBox5.Text);
            b2 = Convert.ToInt32(textBox6.Text);
            b3 = Convert.ToInt32(textBox7.Text);
            b4 = Convert.ToInt32(textBox8.Text);
            b5 = Convert.ToInt32(textBox9.Text);
            b6 = Convert.ToInt32(textBox10.Text);
            b7 = Convert.ToInt32(textBox11.Text);
            b8 = Convert.ToInt32(textBox12.Text);
            b9 = Convert.ToInt32(textBox13.Text);

            Obj.checkNumber(b1, label4);
            Obj.checkNumber(b2, label4);
            Obj.checkNumber(b3, label4);
            Obj.checkNumber(b4, label4);
            Obj.checkNumber(b5, label4);
            Obj.checkNumber(b6, label4);
            Obj.checkNumber(b7, label4);
            Obj.checkNumber(b8, label4);
            Obj.checkNumber(b9, label4);

            result2 = (b1 * b5 * b8) + (b2 * b6 * b7) + (b4 * b4 * b3) - (b3 * b5 * b7) - (b3 * b4 * b9) - (b1 * b8 * b6);

            label2.Text = result2.ToString();

        }

        private void label3_Click(object sender, EventArgs e)
        {

        }
    }
}