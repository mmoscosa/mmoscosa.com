<div id="contact">
	<span class="header">Get in touch!</span>
	<form method="post" action="/controller/contact.php">
		<fieldset>
	    <label for="name">Name: <span class="required">*</span></label>
	    <input type="text" id="name" name="name" value="" placeholder="John Doe" required="required" autofocus="autofocus" />
	    <label for="email">Email Address: <span class="required">*</span></label>
	    <input type="email" id="email" name="email" value="" placeholder="johndoe@example.com" required="required" />
	    <label for="telephone">Telephone: </label>
	    <input type="tel" id="telephone" name="telephone" value="" />
	    <label for="message">Message: <span class="required">*</span></label>
	    <textarea id="message" name="message" placeholder="Your message must be greater than 20 charcters" required="required" data-minlength="20"></textarea>
		</fieldset>
	    <span id="loading"></span>
	    <input type="submit" value="Send!" id="submit-button" class="btn btn-primary" />
	    <p id="req-field-desc"><span class="required">*</span> indicates a required field</p>
	</form>
</div>


