namespace WinFormsApp1
{
    partial class Form1
    {
        /// <summary>
        ///  Required designer variable.
        /// </summary>
        private System.ComponentModel.IContainer components = null;

        /// <summary>
        ///  Clean up any resources being used.
        /// </summary>
        /// <param name="disposing">true if managed resources should be disposed; otherwise, false.</param>
        protected override void Dispose(bool disposing)
        {
            if (disposing && (components != null))
            {
                components.Dispose();
            }
            base.Dispose(disposing);
        }

        #region Windows Form Designer generated code

        /// <summary>
        ///  Required method for Designer support - do not modify
        ///  the contents of this method with the code editor.
        /// </summary>
        private void InitializeComponent()
        {
            button1 = new Button();
            button2 = new Button();
            label1 = new Label();
            label2 = new Label();
            textBox1 = new TextBox();
            textBox2 = new TextBox();
            textBox3 = new TextBox();
            textBox4 = new TextBox();
            textBox11 = new TextBox();
            textBox13 = new TextBox();
            textBox12 = new TextBox();
            textBox8 = new TextBox();
            textBox10 = new TextBox();
            textBox9 = new TextBox();
            textBox5 = new TextBox();
            textBox7 = new TextBox();
            textBox6 = new TextBox();
            label3 = new Label();
            label4 = new Label();
            SuspendLayout();
            // 
            // button1
            // 
            button1.Location = new Point(161, 248);
            button1.Name = "button1";
            button1.Size = new Size(103, 23);
            button1.TabIndex = 0;
            button1.Text = "Расчитать 2х2";
            button1.UseVisualStyleBackColor = true;
            button1.Click += button1_Click;
            // 
            // button2
            // 
            button2.Location = new Point(506, 248);
            button2.Name = "button2";
            button2.Size = new Size(104, 23);
            button2.TabIndex = 1;
            button2.Text = "Расчитать 3х3";
            button2.UseVisualStyleBackColor = true;
            button2.Click += button2_Click;
            // 
            // label1
            // 
            label1.AutoSize = true;
            label1.Location = new Point(193, 295);
            label1.Name = "label1";
            label1.Size = new Size(38, 15);
            label1.TabIndex = 2;
            label1.Text = "label1";
            // 
            // label2
            // 
            label2.AutoSize = true;
            label2.Location = new Point(535, 294);
            label2.Name = "label2";
            label2.Size = new Size(38, 15);
            label2.TabIndex = 3;
            label2.Text = "label2";
            // 
            // textBox1
            // 
            textBox1.Location = new Point(175, 134);
            textBox1.Name = "textBox1";
            textBox1.Size = new Size(21, 23);
            textBox1.TabIndex = 4;
            // 
            // textBox2
            // 
            textBox2.Location = new Point(229, 134);
            textBox2.Name = "textBox2";
            textBox2.Size = new Size(21, 23);
            textBox2.TabIndex = 5;
            // 
            // textBox3
            // 
            textBox3.Location = new Point(175, 189);
            textBox3.Name = "textBox3";
            textBox3.Size = new Size(21, 23);
            textBox3.TabIndex = 6;
            // 
            // textBox4
            // 
            textBox4.Location = new Point(229, 189);
            textBox4.Name = "textBox4";
            textBox4.Size = new Size(21, 23);
            textBox4.TabIndex = 7;
            // 
            // textBox11
            // 
            textBox11.Location = new Point(491, 189);
            textBox11.Name = "textBox11";
            textBox11.Size = new Size(21, 23);
            textBox11.TabIndex = 17;
            // 
            // textBox13
            // 
            textBox13.Location = new Point(602, 189);
            textBox13.Name = "textBox13";
            textBox13.Size = new Size(21, 23);
            textBox13.TabIndex = 16;
            // 
            // textBox12
            // 
            textBox12.Location = new Point(548, 189);
            textBox12.Name = "textBox12";
            textBox12.Size = new Size(21, 23);
            textBox12.TabIndex = 15;
            // 
            // textBox8
            // 
            textBox8.Location = new Point(491, 134);
            textBox8.Name = "textBox8";
            textBox8.Size = new Size(21, 23);
            textBox8.TabIndex = 20;
            // 
            // textBox10
            // 
            textBox10.Location = new Point(602, 134);
            textBox10.Name = "textBox10";
            textBox10.Size = new Size(21, 23);
            textBox10.TabIndex = 19;
            // 
            // textBox9
            // 
            textBox9.Location = new Point(548, 134);
            textBox9.Name = "textBox9";
            textBox9.Size = new Size(21, 23);
            textBox9.TabIndex = 18;
            // 
            // textBox5
            // 
            textBox5.Location = new Point(491, 78);
            textBox5.Name = "textBox5";
            textBox5.Size = new Size(21, 23);
            textBox5.TabIndex = 23;
            // 
            // textBox7
            // 
            textBox7.Location = new Point(602, 78);
            textBox7.Name = "textBox7";
            textBox7.Size = new Size(21, 23);
            textBox7.TabIndex = 22;
            // 
            // textBox6
            // 
            textBox6.Location = new Point(548, 78);
            textBox6.Name = "textBox6";
            textBox6.Size = new Size(21, 23);
            textBox6.TabIndex = 21;
            // 
            // label3
            // 
            label3.AutoSize = true;
            label3.Location = new Point(193, 335);
            label3.Name = "label3";
            label3.Size = new Size(32, 15);
            label3.TabIndex = 24;
            label3.Text = "Error";
            label3.Visible = false;
            label3.Click += label3_Click;
            // 
            // label4
            // 
            label4.AutoSize = true;
            label4.Location = new Point(535, 335);
            label4.Name = "label4";
            label4.Size = new Size(32, 15);
            label4.TabIndex = 25;
            label4.Text = "Error";
            label4.Visible = false;
            // 
            // Form1
            // 
            AutoScaleDimensions = new SizeF(7F, 15F);
            AutoScaleMode = AutoScaleMode.Font;
            ClientSize = new Size(800, 450);
            Controls.Add(label4);
            Controls.Add(label3);
            Controls.Add(textBox5);
            Controls.Add(textBox7);
            Controls.Add(textBox6);
            Controls.Add(textBox8);
            Controls.Add(textBox10);
            Controls.Add(textBox9);
            Controls.Add(textBox11);
            Controls.Add(textBox13);
            Controls.Add(textBox12);
            Controls.Add(textBox4);
            Controls.Add(textBox3);
            Controls.Add(textBox2);
            Controls.Add(textBox1);
            Controls.Add(label2);
            Controls.Add(label1);
            Controls.Add(button2);
            Controls.Add(button1);
            Name = "Form1";
            Text = "Form1";
            ResumeLayout(false);
            PerformLayout();
        }

        #endregion

        private Button button1;
        private Button button2;
        private Label label1;
        private Label label2;
        private TextBox textBox1;
        private TextBox textBox2;
        private TextBox textBox3;
        private TextBox textBox4;
        private TextBox textBox11;
        private TextBox textBox13;
        private TextBox textBox12;
        private TextBox textBox8;
        private TextBox textBox10;
        private TextBox textBox9;
        private TextBox textBox5;
        private TextBox textBox7;
        private TextBox textBox6;
        private Label label3;
        private Label label4;
    }
}